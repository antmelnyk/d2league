Rails.application.routes.draw do

  root 'static#index'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  namespace :api, defaults: { format: 'json' } do
    get 'heroes',   to: 'heroes#index'
    get 'suggest_champions',  to: 'champions#suggest'
  end

end
