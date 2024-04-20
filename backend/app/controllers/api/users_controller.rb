class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render_resource current_user, view: :self
  end
end
