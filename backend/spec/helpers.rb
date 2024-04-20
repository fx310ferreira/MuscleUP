require "devise/jwt/test_helpers"

module Helpers
  def authenticated_header(user)
    Devise::JWT::TestHelpers.auth_headers({}, user)
  end
end
