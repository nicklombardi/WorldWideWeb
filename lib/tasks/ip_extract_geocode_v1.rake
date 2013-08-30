task ip_extract_geocode_v1: :environment do

  require 'geoip'
  db = GeoIP::City.new('/usr/local/Cellar/geoip/1.5.1/share/GeoIP/GeoLiteCity.dat')

  for i in 1..1

    ip = File.open("/Users/MacBookPro/Desktop/tcpip_fp/#{i}", "rb")
    content = ip.read
    ip_addresses = content.scan(/[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/)
    puts "#{ip_addresses}"

    ip_addresses.each do |new_ip|
      @geocode = db.look_up("#{new_ip}")

      @addresses = Address.all
      @addresses.each do |existing_ip|
        if @geocode[:latitude].to_i == existing_ip.latitude && @geocode[:longitude].to_i == existing_ip.longitude
          existing_ip.magnitude = existing_ip.magnitude + 0.0003
          existing_ip.update(@address)
          puts "update: #{existing_ip.id}, #{existing_ip.latitude}, #{existing_ip.longitude}, #{existing_ip.magnitude}"
        else
          puts "ip latitude and longitude not matched"
        end
      end


    end
  end

end