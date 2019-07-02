Rails.application.routes.draw do

  root 'static#index'
  
  namespace :api, defaults: { format: 'json' } do
    get 'heroes', to: 'heroes#index'
  end

end
