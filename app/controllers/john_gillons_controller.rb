class JohnGillonsController < ApplicationController
  layout "john_gillon_layout"
  skip_before_action :verify_authenticity_token

  def create
    @follower = JohnGillon.new(john_gillon_params)

    if @follower.save
      render json: @follower, status: :created
    else
      render json: @follower.errors, status: :unprocessable_entity
    end
  end

  private

  def john_gillon_params
    params.require(:john_gillon).permit(:emailaddress, :age, :gender, :city, :state, :country)
  end
end
