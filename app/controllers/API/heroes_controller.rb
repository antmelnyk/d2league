class API::HeroesController < ApplicationController

  def index
    render json: { 
      heroes: [
        name: 'Puck',
        roles: [
          initiator: true,
          nuker: true
        ]
      ]
    }.to_json
  end
  
end