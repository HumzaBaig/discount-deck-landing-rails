class BriandasController < ApplicationController
  layout "brianda_layout"
  skip_before_action :verify_authenticity_token

  def create
    @follower = Brianda.new(brianda_params)

    if @follower.save
      render json: @follower, status: :created
    else
      render json: @follower.errors, status: :unprocessable_entity
    end
  end

  private

  def brianda_params
    params.require(:brianda).permit(:emailaddress, :age, :gender, :city, :state, :country)
  end
end
