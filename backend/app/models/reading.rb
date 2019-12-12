class Reading < ApplicationRecord
  belongs_to :user

  def get_hexagram(num)
    hexagram = Hexagram.all.find_by(number: num)
  end
end
