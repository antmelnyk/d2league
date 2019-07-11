class CreateJoinTableChampionRole < ActiveRecord::Migration[6.0]
  def change
    create_join_table :champions, :roles do |t|
      t.index [:champion_id, :role_id]
    end
  end
end
