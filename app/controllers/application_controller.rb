class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_plan

  # オーバライド
  # ログイン後のリダイレクト先をマイページに変更
  def after_sign_in_path_for(resource)
    top_mypage_path(current_user)
  end

  # 検索フォーム用
  def set_plan
    @plan = Plan.new
  end
end
