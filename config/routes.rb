Rails.application.routes.draw do
  root to: 'static_page#root'
  resource :static_page, only: :root

  namespace :api, defaults: { format: :json } do 
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
  end
end
