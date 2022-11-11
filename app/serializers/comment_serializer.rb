class CommentSerializer < ActiveModel::Serializer
  attributes :id, :lamborghini_id, :user_id, :comment_input

  belongs_to :lamborghini
  belongs_to :user
end
