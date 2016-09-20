class MemberMailer < ApplicationMailer
  default from: "from@example.com"

  def join_plan_email()
  #  @title = post.title
  binding.pry
    mail to: "arakawayukio62@gmail.com", subject: "テスト送信"
  end
end
