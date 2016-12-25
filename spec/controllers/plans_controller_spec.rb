require 'rails_helper'

RSpec.describe PlansController, :type => :controller do
  login_user

  describe "GET index" do
    it "returns http success" do
      get :index
      expect(response).to be_success
    end
  end

  describe "GET show" do
    it "returns http success" do
      get :edit
      expect(response).to be_success
    end
  end

end
