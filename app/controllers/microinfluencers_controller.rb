class MicroinfluencersController < ApplicationController
  def create
    @microinfluencer = Microinfluencer.new(microinfluencer_params)

    if @microinfluencer.save
      render json: @microinfluencer, status: :created
    else
      render json: @microinfluencer.errors, status: :unprocessable_entity
    end
  end

  private

  def microinfluencer_params
    params.require(:microinfluencer).permit(:emailaddress)
  end
end
