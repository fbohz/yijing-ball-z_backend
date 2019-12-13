Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :readings, :hexagrams
    end
  end
    
  resources :users do
    resources :readings, shallow: true
  end

  get '/auth/google_oauth2/callback' => 'sessions#create'

end
