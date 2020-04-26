class StaticController < ApplicationController

  def index
    # Homepage
  end

  def case_study
    render :layout => 'case_study_layout'
    # Article Page
  end
end
