class User < ApplicationRecord
    has_many :readings, dependent: :destroy
    validates_presence_of :uid

end
