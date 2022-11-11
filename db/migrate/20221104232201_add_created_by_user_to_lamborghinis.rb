class AddCreatedByUserToLamborghinis < ActiveRecord::Migration[6.1]
  def change
    add_column :lamborghinis, :created_by_user, :boolean
  end
end
