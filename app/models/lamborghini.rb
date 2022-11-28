class Lamborghini < ActiveRecord::Base
    scope :template_model, -> { where(created_by_user: !true) }
    scope :created_by_user, -> { where(created_by_user: true) } 

    has_many :comments, -> { order(created_at: :desc) }
    has_many :users, -> { distinct }, through: :comments
end