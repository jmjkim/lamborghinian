class AddDescriptionToLamborghinis < ActiveRecord::Migration[6.1]
  def change
    add_column :lamborghinis, :description, :string
  end
end
