class StaticController < ApplicationController
  layout "empty", :only => [ :'kosmios' ]

  def index
    # Homepage
  end
end
