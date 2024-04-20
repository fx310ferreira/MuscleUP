require "rails_helper"

url = "/users"

RSpec.describe "USERS", type: :request do
  let(:current_user) { create(:user) }
  let(:auth) { authenticated_header(current_user) }

  it "Show user info ("+url+")" do
    puts "hello"
    puts "current_user: #{current_user.inspect}"
    puts "auth: #{auth.inspect}"

    get url, headers: auth
    puts "response: #{response.inspect}"
    expect(response).to have_http_status(200)
  end
end
