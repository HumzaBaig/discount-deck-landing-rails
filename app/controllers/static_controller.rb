class StaticController < ApplicationController

  def index
    # Homepage
  end

  def old_case_study
    redirect_to :action => "case_study", :status => 302
  end

  def case_study
    render :layout => 'case_study_layout'
    # Article Page
  end

  # Document Pages
  def cookie_policy
    render :layout => 'no_follow_layout'
  end
  def privacy_policy
    render :layout => 'no_follow_layout'
  end
  def terms_conditions
    render :layout => 'no_follow_layout'
  end
end
