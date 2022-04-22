class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :occupation, :interest
end
