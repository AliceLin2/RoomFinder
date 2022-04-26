class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :location, :rent, :num_of_bedrooms, :num_of_bathrooms, :user_id
  belongs_to :user
end
