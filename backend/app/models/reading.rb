class Reading < ApplicationRecord
  belongs_to :user
  validates_presence_of :hexnum, :date

  def hexagram
    Hexagram.all.find_by(number: self.hexnum)
  end

  def change_hex
    Hexagram.all.find_by(number: self.changenum) if self.changenum
  end
end