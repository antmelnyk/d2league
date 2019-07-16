# Roles
%w(Carry Disabler Initiator Nuker Support Pusher Durable Jungler Escape).each do |role|
  Role.create!({ name: role, game: 'dota' })
end
%w(Enchanter Catcher Juggernaut Diver Burst Battlemage Artillery Marksman Slayer Assassin Skirmisher Vanguard Warden Specialist).each do |role|
  Role.create!({ name: role, game: 'league' })
end

# Heroes
heroes = ActiveSupport::JSON.decode File.read('lib/dota_heroes.json')
heroes.each do |hero_data|
  hero = Hero.new({ name: hero_data['name'] })
  hero_data['roles'].each do |role| 
    hero.roles << Role.where(name: role, game: 'dota')
  end
  hero.save
end

# Champions
champions = ActiveSupport::JSON.decode File.read('lib/league_champs.json')
champions.each do |champ_data|
  champion = Champion.new({ name: champ_data['name'] })
  champion.roles << Role.where(name: champ_data['role'], game: 'league')
  %w(passive q w e r).each_with_index do |ability, index|
    champion[ability] = champ_data['abilities'][index]['name']
    champion["#{ability}_description"] = champ_data['abilities'][index]['description']
  end
  champion.save
end

# Similarities
similarities_data = ActiveSupport::JSON.decode File.read('db/similarities.json')
similarities_data.each do |hero|
  hero["similarities"].each do |similarity|
    begin
      Similarity.create({
        hero_id: Hero.where(name: hero["name"]).first.id,
        champion_id: Champion.where(name: similarity["name"]).first.id,
        role: similarity["role"] ? similarity["role"] : false,
        skills: similarity["skills"] ? similarity["skills"] : false,
        theme: similarity["theme"] ? similarity["theme"] : false,
        description: similarity["description"]
      })
    rescue
      puts "ERROR: " + similarity.inspect
    end
  end
end
