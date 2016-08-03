class Plan < ActiveRecord::Base
  belongs_to :area
  has_many :places
  has_many :plan_users
  has_many :users, through: :plan_users
end
