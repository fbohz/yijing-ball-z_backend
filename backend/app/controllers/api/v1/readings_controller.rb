class Api::V1::ReadingsController < ApplicationController
    def index
      case
      when params[:user_id]
        user = User.find_by_id(params[:user_id])
        if user 
          readings = user.readings
          render json: readings, status: 200
        else 
          readings = Reading.all
        end 
    end
      
      def show
        reading = Reading.find(params[:id])
        
        render json: reading, status: 200
      end
      
      def create
        reading = Reading.create(reading_params)
        
        render json: reading, status: 200
      end
      
      def update
        reading = Reading.find(params[:id])
        reading.update(reading_params)
        render json: reading, status: 200
      end
      
      def destroy 
        reading = Reading.find(params[:id])
        reading.delete
    
        render json: {readingId: reading.id}
      end
    
    
      private
        def reading_params
          params.require(:reading).permit(:hexnum, :number, :english_name, :chinese_name, :characters, :judgement, :image, :line_1, :line_2, :line_3, :line_4, :line_5, :line_6)
        end
end
