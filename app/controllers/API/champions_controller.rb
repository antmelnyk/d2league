class API::ChampionsController < ApplicationController

  def suggest
    similarities = []
    Similarity.where(hero_id: suggest_params[:heroes]).each do |similarity_data|
      similarity = {}
      similarity[:similarity_info] = similarity_data.attributes.except("created_at", "updated_at")
      similarity[:champion_info] = similarity_data.champion.attributes.except("created_at", "updated_at")
      similarity[:champion_info][:role] = similarity_data.champion.roles.first.name
      similarities << similarity
    end
    render json: similarities
  end

  private

  def suggest_params
    params.permit(:format, heroes: [])
  end
  
end