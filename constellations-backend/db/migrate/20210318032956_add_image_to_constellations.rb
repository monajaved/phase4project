class AddImageToConstellations < ActiveRecord::Migration[6.1]
  def change
    add_column :constellations, :image, :string
  end
end
