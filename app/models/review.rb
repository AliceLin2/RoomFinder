class Review < ApplicationRecord
    belongs_to :apartments
    belongs_to :user
end
