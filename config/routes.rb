Rails.application.routes.draw do
  resources :john_gillons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'

  # sitemap
  match '/sitemap', to: 'static#sitemap', via: 'get', as: :sitemap

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
