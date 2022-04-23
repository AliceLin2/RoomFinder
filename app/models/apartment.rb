class Apartment < ApplicationRecord
    validates :location, presence: true
    validates :rent, numericality: {minimum: 0}
    belongs_to :user
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    has_one_attached :image, :dependent => :destroy
end
