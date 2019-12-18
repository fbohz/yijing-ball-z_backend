class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: 200
    end

    def create
        user = User.find_or_initialize_by(uid: user_params["attributes"]["uid"])
        if !!user.id  
            render json: user, status: 200
        else
            user.name = user_params["attributes"]["name"]
            user.provider = user_params["attributes"]["provider"]
            user.save
            render json: user, status: 200
        end    
    end

    def show
        user = User.find(params[:id])
        if user 
            render json: user, status: 200
        end
    end

    private
    def user_params
      # permit body of frontend request.
      params.require(:user).permit(:body, attributes: {}) 
    end
end
