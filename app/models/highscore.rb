class Highscore < ActiveRecord::Base
  validates :name, :presence => {:message => 'Name cannot be blank.'}
end
