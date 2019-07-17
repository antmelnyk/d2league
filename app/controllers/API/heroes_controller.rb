class API::HeroesController < ApplicationController

  def index
    heroes = Hero.all.sort_by(&:name).to_json(only: [:id, :name])
    render json: heroes
  end
  
end