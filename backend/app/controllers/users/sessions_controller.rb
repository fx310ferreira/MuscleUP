# frozen_string_literal: true
require 'application_responder'

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    if params[:user][:email].blank? && params[:user][:password].blank?
      render json: { errors: { email: ["can't be blank"], password: ["can't be blank"] } }, status: :unprocessable_entity
    elsif params[:user][:email].blank?
      render json: { errors: { email: ["can't be blank"] } }, status: :unprocessable_entity
    elsif params[:user][:password].blank?
      render json: { errors: { password: ["can't be blank"] } }, status: :unprocessable_entity
    else
      super
    end
  end

  # DELETE /resource/sign_out
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
    head :ok
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
