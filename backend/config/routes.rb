Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :readings, :hexagrams
      resources :users do
        resources :readings, shallow: true
      end
    end
  end

  get '/*a', to: 'application#not_found'

end
