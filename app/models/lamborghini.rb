class Lamborghini < ActiveRecord::Base
    has_many :comments, -> { order(created_at: :desc) }
    has_many :users, through: :comments
end