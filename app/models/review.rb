class Review < ApplicationRecord
    belongs_to :apartments, dependent: :destroy
    belongs_to :user
end
