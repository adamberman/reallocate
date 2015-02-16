Rails.application.routes.draw do
  root to: 'static_page#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resources :organizations, only: :index
    resources :requests, only: [:create, :index]
    resources :offers, only: [:create, :index]
    resources :transactions, only: [:create, :update]
    resources :tasks, only: [:show, :index]
    resource :session, only: [:create, :destroy]
  end
end
