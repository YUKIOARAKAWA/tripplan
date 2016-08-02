class Plan < ActiveRecord::Base
  belongs_to :area
  has_many :places
end
