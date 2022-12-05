class LamborghinisController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        @models = Lamborghini.template_model
        render json: @models
    end
    
    def show
        @lamborghini = Lamborghini.find(params[:id])
        
        if @lamborghini
            render json: @lamborghini
        else
            render json: { error: "Lamborghini not found" }, status: :not_found
        end
    end

    def user_lamborghinis
        @user_lamborghinis = Lamborghini.created_by_user
        render json: @user_lamborghinis
    end
    
    def create 
        @user_lamborghini = Lamborghini.create!(lamborghini_params)
        render json: @user_lamborghini, status: :created
    end


    # def assessment_function
    #     @found = Lamborghini.created_by_user.select {|lamborghini| lamborghini.description.include?(params[:assessment_params])}
    #     render json: @found
    # end



    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def lamborghini_params
        params.permit(:id, :model, :name, :specifications, :img_url1, :img_url2, :img_url3, :created_by_user, :description)
    end
end
