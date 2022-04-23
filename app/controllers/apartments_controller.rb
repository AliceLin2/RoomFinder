class ApartmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create!(apartment_params)
        render json: apartment, status: :created
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        render json: apartment
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        head :no_content
    end

    private

    def apartment_params
        params.permit(:location, :rent, :num_of_bedrooms, :num_of_bathrooms)
    end
    
    def render_not_found_response
        render json: {error: "Apartment not found"}, status: :not_found
    end
end
