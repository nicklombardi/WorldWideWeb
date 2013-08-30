task ip_extract: :environment do

  require 'geoip'
  require 'pry'

  previous_lat = nil
  previous_long = nil
  previous_magnitude = 0

  db = GeoIP::City.new('/usr/local/Cellar/geoip/1.5.1/share/GeoIP/GeoLiteCity.dat')

  for i in 1..224
    ip = File.open("/Users/MacBookPro/Desktop/tcpip_fp/#{i}", "rb")
    content = ip.read
    ip_addresses = content.scan(/[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/)
    # puts "#{ip_addresses}"
    ip_addresses.each do |new_ip|
      @geocode = db.look_up("#{new_ip}")
      if @geocode != nil
        current_lat = @geocode[:latitude].to_i
        current_long = @geocode[:longitude].to_i
      end
      # if previous lat long matches current lat long magnitude increases
      if (previous_lat == current_lat) && (previous_long == current_long)
        previous_magnitude = previous_magnitude + 0.000005

      # if previous lat long doesn't match current lat long previous will be saved
      # a new previous will be empty and then be set
      elsif (previous_lat != current_lat) && (previous_long != current_long)
        new_ip = Address.new
        new_ip.latitude = previous_lat
        new_ip.longitude = previous_long
        new_ip.magnitude = previous_magnitude
        puts "#{new_ip}, #{new_ip.latitude}, #{new_ip.longitude}, #{new_ip.magnitude}"
        new_ip.save

        previous_lat = current_lat
        previous_long = current_long
        previous_magnitude = 0
      end

    end
  end

end