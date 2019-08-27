Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'

  # business mockups
  match '/kosmios', to: 'static#kosmios', via: 'get', as: :'kosmios'

  # influencer landing pages
  get '/brianda', to: 'briandas#new'

  resources :microinfluencers, only: [:create]
  resources :briandas, only: [:create]
end
