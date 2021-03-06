Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'

  # sitemap
  match '/sitemap', to: 'static#sitemap', via: 'get', as: :sitemap

  # policy pages
  match '/terms-conditions', to: 'static#terms_conditions', via: 'get', as: :terms_conditions
  match '/privacy-policy', to: 'static#privacy_policy', via: 'get', as: :privacy_policy
  match '/cookie-policy', to: 'static#cookie_policy', via: 'get', as: :cookie_policy

  match '/app-privacy-policy', to: 'static#app_privacy_policy', via: 'get', as: :app_privacy_policy
  match '/app-terms-conditions', to: 'static#app_terms_conditions', via: 'get', as: :app_terms_conditions

  # blog index page
  # match '/blog', to: 'static#blog', via: 'get', as: :blog

  # deprecated blog posts
  # match '/a-case-for-investment-in-discount-deck', to: 'static#old_case_study', via: 'get', as: :old_case_study

  # blog posts
  # match '/blog/what_came_first_the_chicken_or_the_egg', to: 'static#case_study', via: 'get', as: :case_study

  # influencer landing pages
  get '/brianda', to: 'briandas#new'
  get '/john_gillon', to: 'john_gillons#new'
  get '/akoy_agau', to: 'akoy_agaus#new'
  get '/john_jordan', to: 'john_jordans#new'

  resources :microinfluencers, only: [:create]
  resources :briandas, only: [:create]
  resources :john_gillons, only: [:create]
  resources :akoy_agaus, only: [:create]
  resources :john_jordans, only: [:create]
end
