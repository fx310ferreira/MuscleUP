class ApplicationResponder < ActionController::Responder
  include Responders::HttpCacheResponder

  # Redirects resources to the collection path (index action) instead
  # of the resource path (show action) for POST/PUT/DELETE requests.
  # include Responders::CollectionResponder.

  # Configure default status codes for responding to errors and redirects.
  self.error_status = :unprocessable_entity
  self.redirect_status = :see_other

  def respond
    status = case controller
    when Devise::SessionsController
      :created
    when Devise::RegistrationsController
      :created
    else
      :ok
    end

    if has_errors?
      render json: {errors: resource.errors}, status: status
    else
      head status
    end
  end
end
