class Api::V1::readingsController < ApplicationController
    def index
        @readings = reading.all
    
        render json: @readings, status: 200
      end
      
      def show
        @reading = reading.find(params[:id])
        
        render json: @reading, status: 200
      end
      
      def create
        @reading = reading.create(reading_params)
        
        render json: @reading, status: 200
      end
      
      def update
        @reading = reading.find(params[:id])
        @reading.update(reading_params)
        render json: @reading, status: 200
      end
      
      def destroy 
        @reading = reading.find(params[:id])
        @reading.delete
    
        render json: {readingId: @reading.id}
      end
    
    
      private
        def reading_params
          params.require(:reading).permit(:hexnum)
        end
end
