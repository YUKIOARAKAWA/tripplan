class MypageController < ApplicationController
  def top
    @myplans = User.find(params[:id]).plans
  end

  def xxx
  end
end
