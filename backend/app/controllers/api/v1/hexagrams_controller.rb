class Api::V1::HexagramsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        @hexagrams = Hexagram.all
        render json: @hexagrams, status: 200
    end
      
      def show
        @hexagram = Hexagram.find(params[:id])
        render json: @hexagram, status: 200
      end

      private
      
    def not_found  
        render json: {
          status: 500,
          errors: ['Server error. Record(s) not found']
        }
    end 
end
