class PlansController < ApplicationController
  before_action :set_plan, only: [:show, :member, :edit, :update, :destroy]

  # GET /plans
  # GET /plans.json
  def index
    @plans = Plan.all
  end

  # GET /plans/1
  # GET /plans/1.json
  def show
    @place = Place.new
    @place.pins.build
    @places = @plan.places
    @members = @plan.users
    @hash = Gmaps4rails.build_markers(@places) do |place, marker|
      marker.lat place.latitude
      marker.lng place.longitude
      marker.infowindow "場所：#{place.address}<br>希望者：#{place.user.name}<br>
                        行きたい度：#{place.show_star}<br>コメント：#{place.pins[0].comment}"
      #marker.picture({
      #          :url    => "/brandImage.png",
                #:url    => "https://graph.facebook.com/#{place.user.uid}/picture?width=32&height=32",
      #          :width  => "200",
      #          :height => "200"
      #         })
      marker.json({title: place.address})
    end

    @point = []
    @hash.each do |hash|
      temp= []
      temp.push(hash[:lat])
      temp.push(hash[:lng])
      @point.push(temp)
    end

  end

  def add
    @place = Place.new(place_params)
    @place.set_route(params[:place][:plan_id])
    respond_to do |format|
      if @place.valid?
        if @place.latitude.nil?
          format.html { redirect_to ({action: 'show', id: @place.plan.id }), alert: '存在する場所を入力してください' }
        else
          @place.save
          format.html { redirect_to ({action: 'show', id: @place.plan.id }), notice: '追加しました' }
          format.json { render :show, status: :created, location: @place }
        end
      else
        #format.html { render :new }
        format.html { redirect_to ({action: 'show', id: @place.plan.id }), alert: '場所が入力されていません' }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  def member
    @plan_user = @plan.plan_users.build
    @members = @plan.users
  end

  def add_member
    @plan_user = PlanUser.new(plan_user_params)

    respond_to do |format|
      if @plan_user.save
        format.html { redirect_to ({action: 'member', id: @plan_user.plan_id }) }
        format.json { render :show, status: :created, location: @plan_user }
      else
        format.html { render :member }
        format.json { render json: @plan_user.errors, status: :unprocessable_entity }
      end
    end


  end
  # GET /plans/new
  def new
    @plan = Plan.new
  end

  # GET /plans/1/edit
  def edit
  end

  # POST /plans
  # POST /plans.json
  def create
    @plan = Plan.new(plan_params)
    respond_to do |format|
      if @plan.save
        PlanUser.create(plan_id: @plan.id, user_id: current_user.id)
        format.html { redirect_to ({action: 'member', id: @plan.id }) }
      # format.html { redirect_to @plan, notice: 'Plan was successfully created.' }
        format.json { render :show, status: :created, location: @plan }
      else
        format.html { render :new }
        format.json { render json: @plan.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /plans/1
  # PATCH/PUT /plans/1.json
  def update
    respond_to do |format|
      if @plan.update(plan_params)
        format.html { redirect_to @plan, notice: 'Plan was successfully updated.' }
        format.json { render :show, status: :ok, location: @plan }
      else
        format.html { render :edit }
        format.json { render json: @plan.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /plans/1
  # DELETE /plans/1.json
  def destroy
    @plan.destroy
    respond_to do |format|
      format.html { redirect_to plans_url, notice: 'Plan was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plan
      @plan = Plan.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def plan_params
      params.require(:plan).permit(:name, :start_date, :end_date, :area_id)
    end

    def place_params
      params.require(:place).permit(:user_id, :plan_id, :address, :latitude, :longitude, :route,
                                    pins_attributes: [:comment, :want])
    end

    def plan_user_params
      params.require(:plan_user).permit(:user_id, :plan_id)
    end

end
