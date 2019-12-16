class UsersController < ApplicationController
    def create
        @user = User.find_or_create_by(uid: uid)

        if @user 
            render json: @user, status: 200
        end
    
      end
end
