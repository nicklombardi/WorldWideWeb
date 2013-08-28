WorldWideWeb::Application.routes.draw do

  root :to => 'home#index'

  resources :home, only: [:index]

  resources :addresses

end
