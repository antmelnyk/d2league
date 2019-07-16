class API::HeroesController < ApplicationController

  def index
    heroes = Hero.all.to_json(only: [:id, :name])
    render json: heroes
  end
  
end