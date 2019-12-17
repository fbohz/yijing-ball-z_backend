class Api::V1::UsersController < ApplicationController
    def index
        users = Reading.all
        render json: users, status: 200
    end

    def create
        user = User.find_or_create_by(uid: uid)

        if user 
            render json: user, status: 200
        end
    
    end

    def show
        user = Reading.find(params[:id])
        if user 
            render json: user, status: 200
        end
      end
end
