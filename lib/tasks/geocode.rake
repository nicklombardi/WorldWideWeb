task geocode: :environment do

  require 'geoip'

  @addresses = Address.all
    db = GeoIP::City.new('/usr/local/Cellar/geoip/1.5.1/share/GeoIP/GeoLiteCity.dat')

  @addresses.each do |location|
    result = db.look_up("#{location.ip}")

    # @address = Address.find(params[:id])
    # @address.latitude = result[:latitude]
    # @address.save

    puts "#{location.ip}, #{result[:latitude]}, #{result[:longitude]}, #{result[:city]}, #{result[:region]}"
  end

end
