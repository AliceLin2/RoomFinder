class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :occupation, :interest
  has_many :apartments
end
