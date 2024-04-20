# require "rails_helper"

# url = "/users"

# RSpec.describe "USERS", type: :request do
#   describe "Create a user ("+url+"/register)" do
#     let(:user_params) { attributes_for(:user) }
#     it "all params work - [200]" do
#       post url+"/register", params: { user: user_params }
#       expect(response).to have_http_status(201)
#       expect(response.headers["Authorization"]).to be_present
#       expect(response.headers["Authorization"]).to match(/^Bearer /)
#     end

#     context "missing" do
#       it "email" do
#         post url+"/register", params: { user: user_params.except(:email) }
#         res = JSON.parse(response.body)
#         expect(res["errors"]["email"]).to include("can't be blank")
#       end

#       it "password" do
#         post url+"/register", params: { user: user_params.except(:password) }
#         res = JSON.parse(response.body)
#         expect(res["errors"]["password"]).to include("can't be blank")
#       end

#       it "name" do
#         post url+"/register", params: { user: user_params.except(:name) }
#         res = JSON.parse(response.body)
#         expect(res["errors"]["name"]).to include("can't be blank")
#       end
#     end
#   end

#   describe "Login a user ("+url+"/login)" do
#     let(:user) { create(:user) }
#     it "all params work - [200]" do
#       post url+"/login", params: { user: { email: user.email, password: user.password } }
#       expect(response.headers["Authorization"]).to be_present
#       expect(response.headers["Authorization"]).to match(/^Bearer /)
#     end

#     context "missing" do
#       it "email" do
#         post url+"/login", params: { user: { password: user.password } }
#         res = JSON.parse(response.body)
#         expect(res["errors"]["email"]).to include("can't be blank")
#       end

#       it "password" do
#         post url+"/login", params: { user: { email: user.email } }
#         res = JSON.parse(response.body)
#         expect(res["errors"]["password"]).to include("can't be blank")
#       end
#     end
#   end
# end
