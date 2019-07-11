class CreateJoinTableHeroRole < ActiveRecord::Migration[6.0]
  def change
    create_join_table :heroes, :roles do |t|
      t.index [:hero_id, :role_id]
    end
  end
end
