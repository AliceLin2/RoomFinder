class Type < ApplicationRecord
    has_many :apartments
    has_many :users, through: :apartments
end
