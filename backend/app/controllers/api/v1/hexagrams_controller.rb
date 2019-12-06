class Api::V1::HexagramsController < ApplicationController
    def index
        @hexagrams = Hexagram.all
    
        render json: @hexagrams, status: 200
      end
      
      def show
        @hexagram = Hexagram.find(params[:id])
        
        render json: @hexagram, status: 200
      end
end
