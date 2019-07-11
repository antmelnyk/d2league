class CreateSimilarities < ActiveRecord::Migration[6.0]
  def change
    create_table :similarities do |t|
      t.integer :hero_id
      t.integer :champion_id
      t.boolean :role, default: false
      t.boolean :skills, default: false
      t.boolean :theme, default: false
      t.string :description

      t.timestamps
    end
  end
end
