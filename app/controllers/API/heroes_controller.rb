class API::HeroesController < ApplicationController

  def index
    render json: Hero.all.to_json
  end
  
end