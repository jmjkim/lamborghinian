class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        @comment = Comment.create!(comment_params)
        render json: @comment, status: :created
    end

    def update
        @comment = Comment.find(params[:comment_id])
        if @comment
            @comment.update!(comment_params)
            render json: @comment
        else
            render json: { error: "Comment not found" }, status: :not_found
        end
    end

    def destroy
        @comment = Comment.find(params[:comment_id])
        @comment.destroy
        head :no_content
    end


    private
    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def comment_params
        params.permit(:lamborghini_id, :user_id, :comment_input)
    end
end
