class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?

  respond_to :json

  def render_not_found
    head :not_found
  end

  def render_forbidden
    head :forbidden
  end

  def render_unprocessable_entity(object)
    if object.is_a?(ActiveRecord::Base)
      render json: {errors: object.errors&.messages}, status: :unprocessable_entity
    else
      render json: {errors: object}, status: :unprocessable_entity
    end
  end

  def render_resource(resource, meta: nil, view: nil, root: :data, status: :ok, **)
    if resource.respond_to? :blueprinter
      key = if resource.respond_to? :klass
        resource.klass.name.downcase.pluralize
      else
        resource.class.name.downcase
      end

      resource = resource.blueprinter.render_as_hash(resource, view: view, root: key, **)
    end

    response = {root => resource}
    response.merge!({meta:}) if meta

    render json: response, status:
  end

  private

  def authenticate_user!
    request.env["devise.skip_trackable"] = true
    if user_signed_in?
      super
    else
      head :unauthorized
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
