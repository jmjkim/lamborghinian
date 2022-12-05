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

  # get "/user_lamborghinis/:assessment_params", to: "lamborghinis#assessment_function"

  # Write a custom route that takes in a dynamic part (one word no spaces) 
  # that will return all the Lamborghinis that have that word in the description of the Lamborghini 
  # or any comment that was left on that Lamborghini.

#  write custom route
# we need a params (for the word)
# we need params value in the lamborghini controller
# wirte a method that looks for the params value in the description(attribute) of lamborghini using array method and include
#  for the comment that was left on that lamborghini, 
# make sure we return it


#  write custom route
# we need a params (for the word)
# write an action in the lamborghini controller
  #-> that looks for the params value in the description(attribute) of lamborghini using array method and include, 
  #or return the comments on each itearating lamborghini, 
# make sure we return it

# try to validate step by step


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end