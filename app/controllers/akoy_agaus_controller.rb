class AkoyAgausController < ApplicationController
  layout "akoy_agau_layout"
  skip_before_action :verify_authenticity_token

  def create
    @follower = AkoyAgau.new(akoy_agau_params)

    if @follower.save
      render json: @follower, status: :created
    else
      render json: @follower.errors, status: :unprocessable_entity
    end
  end

  private

  def akoy_agau_params
    params.require(:akoy_agau).permit(:emailaddress, :age, :gender, :city, :state, :country)
  end
end
