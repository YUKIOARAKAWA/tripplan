class MypageController < ApplicationController
  def top
    @myplans = current_user.plans
  end

  def xxx
  end
end
