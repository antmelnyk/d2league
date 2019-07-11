class CreateSimilarities < ActiveRecord::Migration[6.0]
  def change
    create_table :similarities do |t|
      t.integer :hero_id
      t.integer :champion_id
      t.boolean :role
      t.boolean :skills
      t.boolean :theme
      t.string :description

      t.timestamps
    end
  end
end
