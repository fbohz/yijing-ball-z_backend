class ApplicationController < ActionController::API
    def not_found
        render json: {
            status: 500,
            errors: ['Not found']
          }
    end
end
