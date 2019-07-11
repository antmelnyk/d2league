class Champion < ApplicationRecord
  has_and_belongs_to_many :roles
  has_many :heroes, through: :similarities
end
