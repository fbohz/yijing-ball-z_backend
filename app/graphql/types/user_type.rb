module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :provider, String, null: true
    field :uid, String, null: false
    field :rememberToken, String, null: true
  end
end
