class Place < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  belongs_to :user
  belongs_to :plan

  #　追加されたplaceをプランの最後の設定する
  def set_route(plan_id)
    max_cnt = Plan.find(plan_id).places.count
    self.route = max_cnt + 1
  end
end
