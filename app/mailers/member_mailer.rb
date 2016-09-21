class MemberMailer < ApplicationMailer
  default from: "from@example.com"

  def join_plan_email(user_id,plan_id,current_user)
    @user = User.find(user_id)
    @plan = Plan.find(plan_id)
    mail to: @user.email, subject: "#{current_user.name}さんからプランに招待されました"
  end
end
