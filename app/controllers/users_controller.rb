class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        @user = User.create!(user_params)
        render json: @user, status: :created
    end

    def show
        @user = User.find_by(id: session[:user_id])
        if @user
            render json: @user
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    def display_user_associated_lamborghinis
        @user_associated_lamborghinis = User.find_by(id: session[:user_id]).lamborghinis.uniq
        render json: @user_associated_lamborghinis
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
