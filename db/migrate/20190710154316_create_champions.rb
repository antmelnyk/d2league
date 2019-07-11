class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :passive
      t.string :q
      t.string :w
      t.string :e
      t.string :r

      t.timestamps
    end
  end
end
