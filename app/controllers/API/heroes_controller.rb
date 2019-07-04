class API::HeroesController < ApplicationController

  def index
    render json: [
      {
        name: 'Puck',
        roles: ['initiator', 'nuker']
      },
      {
        name: 'Pudge',
        roles: ['initiator', 'nuker', 'durable']
      }
    ].to_json
  end
  
end