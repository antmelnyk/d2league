class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :passive
      t.string :passive_description
      t.string :q
      t.string :q_description
      t.string :w
      t.string :w_description
      t.string :e
      t.string :e_description
      t.string :r
      t.string :r_description

      t.timestamps
    end
  end
end
