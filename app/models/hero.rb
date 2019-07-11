class Hero < ApplicationRecord
  has_and_belongs_to_many :roles
  has_many :champions, through: :similarities
end
