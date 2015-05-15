Rails.application.routes.draw do
  devise_for :users
  resources :mosaics
  resources :gifs
end
