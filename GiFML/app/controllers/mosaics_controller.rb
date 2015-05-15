class MosaicsController < ApplicationController
  def index
  end

  def create
    @mosaic = Mosaic.new(mosaic_params)
    @mosaic.save
  end

  private
    def mosaic_params
      params.require(:mosaic).permit(:urls)
    end
end
