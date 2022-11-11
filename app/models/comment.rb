class Comment < ActiveRecord::Base
    belongs_to :lamborghini
    belongs_to :user

    validates :comment_input, presence: true
    validates :comment_input, length: { maximum: 200, too_long: "%{count} characters is the maximum allowed"}
end