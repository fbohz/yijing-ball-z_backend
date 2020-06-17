module Mutations
    class CreateUser < BaseMutation
        # arguments passed to the `resolve` method
        argument :name, String, required: true
        argument :uid, String, required: true
        argument :provider, String, required: true

        # return type from the mutation
        type Types::UserType

        def resolve(name: nil, uid: nil, provider: nil)
            user = User.find_or_initialize_by(uid: uid)
            if !!user.id  
                user
            else
                User.create!(
                    name: name,
                    uid: uid,
                    provider: provider,
                )
            end  
          end
    end 
end