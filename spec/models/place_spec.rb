require 'rails_helper'

RSpec.describe Place, :type => :model do
  #pending "add some examples to (or delete) #{__FILE__}"

  describe "バリデーション" do
    before do
      @place = FactoryGirl.create(:place)
      puts "@places"
      puts @place.address
      puts @place.latitude
      puts @place.longitude
    end

    context "住所が入力されていればOK" do
      it { expect(@place).to be_valid }
    end

    context "住所が入力されていないとNG" do
      before do
        @place.address = nil
      end
      it { expect(@place).to be_invalid }
    end
  end

  describe "ジオコーディングの動作" do
    before do
      @place = FactoryGirl.create(:place)
    end

    context "緯度経度が設定されること" do
      it { expect(@place.latitude.present?).to eq true
          expect(@place.longitude.present?).to eq true
          }
    end
  end
end
