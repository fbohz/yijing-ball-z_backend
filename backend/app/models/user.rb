class User < ApplicationRecord
    has_many :readings
    validates_presence_of :name, :uid

end
