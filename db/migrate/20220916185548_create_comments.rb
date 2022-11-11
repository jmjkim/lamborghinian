class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :lamborghini_id
      t.integer :user_id
      t.string :comment_input

      t.timestamps
    end
  end
end
