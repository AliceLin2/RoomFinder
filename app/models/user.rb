class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :age, numericality: {minimum: 18}
    has_many :reviews
    has_many :apartments, through: :reviews
end
