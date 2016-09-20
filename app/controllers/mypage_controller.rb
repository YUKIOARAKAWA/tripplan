class MypageController < ApplicationController
  def top
    @user = User.find(params[:id])
    @myplans = @user.plans
  end

  def xxx
  end
end
