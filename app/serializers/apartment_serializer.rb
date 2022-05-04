class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :location, :rent, :num_of_bedrooms, :num_of_bathrooms, :user_id, :type_id, :image_url
  belongs_to :user
  belongs_to :type
end
