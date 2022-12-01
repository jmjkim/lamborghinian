Rails.application.routes.draw do
  get "/usersignedin", to: "users#show"
  post "/signup", to: "users#create"

  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  resources :lamborghinis, only: [:index, :show] do
    resources :comments, only: [:create, :update, :destroy]
  end

  get "/user_lamborghinis", to: "lamborghinis#user_lamborghinis"
  post "/user_lamborghinis", to: "lamborghinis#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end