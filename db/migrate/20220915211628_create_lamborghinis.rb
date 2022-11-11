class CreateLamborghinis < ActiveRecord::Migration[6.1]
  def change
    create_table :lamborghinis do |t|
      t.string :model
      t.string :name
      t.json :specifications
      t.string :img_url1
      t.string :img_url2
      t.string :img_url3

      t.timestamps
    end
  end
end
