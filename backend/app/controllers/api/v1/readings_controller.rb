class Api::V1::ReadingsController < ApplicationController
    def index
      case
      when params[:user_id]
        user = User.find_by_id(params[:user_id])
        if user 
          readings = user.readings
          render json: readings, status: 200
        end
      else 
          readings = Reading.all
      end
       
    end
      
    def show
        reading = Reading.find(params[:id])
        
        render json: reading, status: 200
    end
      
    def create
      binding.pry
      # case
      # when params[:user_id]
      #   user = User.find_by_id(:user_id)
      #   if user 
      #     reading = user.readings.create(reading_params)
      #     render json: reading, status: 200
      #   end
      # end
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
          # permit body of frontend request.
          params.require(:reading).permit(:body, attributes: {})
        end
end
