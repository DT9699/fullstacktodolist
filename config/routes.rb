Rails.application.routes.draw do

  namespace :api do
  # Add routes below this line
    resources :users, only: [:create]

    get    'tasks/:id'                => 'tasks#show'
    get    'tasks'                    => 'tasks#index'
    post   'tasks'                    => 'tasks#create'
    put    'tasks/:id'                => 'tasks#update'
    put    'tasks/:id/mark_complete'  => 'tasks#mark_complete'
    put    'tasks/:id/mark_active'    => 'tasks#mark_active'
    delete 'tasks/:id'                => 'tasks#destroy'
  end

    root 'static_pages#index'
    get '*path'    => 'homepage#index'

end
