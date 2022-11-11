class User < ActiveRecord::Base
    has_secure_password

    has_many :comments
    has_many :lamborghinis, through: :comments

    validates :username, presence: true, uniqueness: true, length: { in: 6..8, message: "must be between 6-8 lengths" }, format: { with: /\A[a-zA-Z]+\z/, message: "must be letters only" }
    validates :password, presence: true, confirmation: true, format: { with: /[a-zA-Z\d]/ }, length: { in: 6..10 }
    validates :password_confirmation, presence: true
end