class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :apartment_id
end
