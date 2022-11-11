class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def authorize 
    return render json: {error: "Unauthorized"}, staus: :unauthorized unless session.include? :user_id
  end
end
