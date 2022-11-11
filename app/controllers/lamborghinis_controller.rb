class LamborghinisController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        @models = Lamborghini.all
        render json: @models
    end
    
    def show
        @lamborghini = Lamborghini.find_by(id: params[:id])
        if @lamborghini
            render json: @lamborghini
        else
            render json: { error: "Lamborghini not found" }, status: :not_found
        end
    end
    
    def create 
        @user_lamborghini = Lamborghini.create!(lamborghini_params)
        render json: @user_lamborghini, status: :created
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def lamborghini_params
        params.permit(:id, :model, :name, :specifications, :img_url1, :img_url2, :img_url3, :created_by_user, :description)
    end
end
