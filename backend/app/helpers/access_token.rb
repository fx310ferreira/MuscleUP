# rubocop:disable Rails/HelperInstanceVariable
class AccessToken
  def initialize(token)
    @token = token
  end

  def apply!(headers)
    headers["Authorization"] = "Bearer #{@token}"
  end
end
# rubocop:enable Rails/HelperInstanceVariable
