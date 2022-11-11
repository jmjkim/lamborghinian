class LamborghiniSerializer < ActiveModel::Serializer
  attributes :id, :model, :name, :specifications, :img_url1, :img_url2, :img_url3, :created_by_user, :description

  has_many :comments
  has_many :users
end
