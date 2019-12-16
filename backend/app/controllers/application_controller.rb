class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
      
    def not_found  
        render json: {
          status: 500,
          errors: ['Server error. Record(s) not found']
        }
    end 
end
