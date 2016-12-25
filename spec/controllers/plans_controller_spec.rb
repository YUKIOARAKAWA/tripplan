require 'rails_helper'

RSpec.describe PlansController, :type => :controller do
  login_user

  describe "GET index" do
    it "returns http success" do
      get :index, plan: FactoryGirl.attributes_for(:plan)
      expect(response).to be_success
    end
  end

  describe "GET show" do
    it "returns http success" do
      get :show, id: FactoryGirl.create(:plan)
      expect(response).to be_success
    end
  end

end
