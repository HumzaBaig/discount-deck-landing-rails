class JohnJordansController < ApplicationController
  layout "john_jordan_layout"
  skip_before_action :verify_authenticity_token

  def create
    @follower = JohnJordan.new(john_jordan_params)

    if @follower.save
      render json: @follower, status: :created
    else
      render json: @follower.errors, status: :unprocessable_entity
    end
  end

  private

  def john_jordan_params
    params.require(:john_jordan).permit(:emailaddress, :age, :gender, :city, :state, :country)
  end
end
