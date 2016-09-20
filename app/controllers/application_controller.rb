class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # オーバライド
  # ログイン後のリダイレクト先をマイページに変更
  def after_sign_in_path_for(resource)
    top_mypage_path(current_user)
  end

end
