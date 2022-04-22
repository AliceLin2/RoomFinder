class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :age, numericality: {minimum: 18}
end
