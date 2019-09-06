Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'

  # sitemap
  match '/sitemap', to: 'static#sitemap', via: 'get', as: :sitemap

  # influencer landing pages
  get '/brianda', to: 'briandas#new'

  resources :microinfluencers, only: [:create]
  resources :briandas, only: [:create]
end
