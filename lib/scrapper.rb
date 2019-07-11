require 'httparty'
require 'nokogiri'
require 'open-uri'
require 'uri'
require 'watir'

DOTA_HEROES_URL = 'http://www.dota2.com/heroes/'
LEAGUE_CHAMPS_URL = 'https://na.leagueoflegends.com/en/game-info/champions/'
LEAGUE_ROLES_URL = 'https://leagueoflegends.fandom.com/wiki/'


class Scrapper

  attr_reader :json_data

  def initialize(url)
    @url = url
  end

  def parse
    case @url
    when DOTA_HEROES_URL then parse_dota_heroes
    when LEAGUE_CHAMPS_URL then parse_league_champs
    end
  end

  def parse_dota_heroes
    heroes = []
    puts "Parsing Dota heroes..."

    document = HTTParty.get(@url)
    page ||= Nokogiri::HTML.parse(document)

    page.css('.heroPickerIconLink').each_with_index do |hero, index|
      hero_data = { id: index }
      hero_document = HTTParty.get(hero[:href])
      hero_page = Nokogiri::HTML.parse(hero_document)
      hero_data[:name] = hero_page.css('#centerColContent h1').inner_html
      hero_data[:roles] = hero_page.css('#heroBioRoles').text.split(' - ')
      hero_data[:class] = hero_data[:roles].shift

      save_image(hero_page.css('#heroPrimaryPortraitImg').attr('src'), "assets/dota_heroes", "#{hero_data[:name]}.png")
      heroes.push(hero_data)

      puts hero_data[:name]
    end
    save_json(heroes, 'dota_heroes.json')
  end

  def parse_league_champs
    champs = []
    puts "Parsing League champions..."

    browser = Watir::Browser.new
    browser.goto(@url)

    page = Nokogiri::HTML.parse(browser.html)

    page.css('.champion-grid li').each_with_index do |champ, index|
      champ_data = { id: index, abilities: [] }
      browser.goto(URI.join(@url, champ.at_css('a')[:href]).to_s)
      champ_data[:name] = wait(browser.div(id: "champ_header").h1).text

      %w(P Q W E R).each do |skill|
        ability = {}

        begin
          ability[:name] = wait(browser.div(id: "#{skill}Name").h3).text
        rescue
          ability[:name] = ""
        end

        begin
          ability[:description] = wait(browser.div(id: "#{skill}Data").p(class: "spell-description")).text
        rescue
          ability[:description] = ""
        end

        champ_data[:abilities].push(ability)

        # save_image(browser.div(id: "#{skill}Icon").img.wait_until(&:present?).src, "assets/champs_skills/#{champ_data[:name]}", "#{skill}.png")
      end

      # save_image(browser.img(class: "dd-set-image-champion-icon").wait_until(&:present?).src, "assets/league_champs", "#{champ_data[:name]}.png")
      champs.push(champ_data)

      browser.goto(LEAGUE_ROLES_URL + champ_data[:name])
      champ_data[:role] = wait(browser.span(class: "glossary tooltips-init-complete")).attribute_value('data-param')

      puts "#{champ_data[:name]}: #{champ_data[:role]}"
    end
    save_json(champs, 'league_champs.json')
  end

  def save_image(url, path, name)
    FileUtils.mkdir_p(path) unless File.exist?(path) 
    image = open(url)
    IO.copy_stream(image, File.join(path, name))
  end

  def save_json(arr, name)
    @json_data = JSON.pretty_generate(arr)
    File.open(name,'w') do |f|
      f.write(@json_data)
    end
  end

  def wait(el)
    el.wait_until { |el| el.present? && el.text != 'Loading...' }
  end
end

# Scrapper.new(DOTA_HEROES_URL).parse
Scrapper.new(LEAGUE_CHAMPS_URL).parse