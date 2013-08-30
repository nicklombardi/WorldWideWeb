task ip_extract_geocode: :environment do

  require 'geoip'

  db = GeoIP::City.new('/usr/local/Cellar/geoip/1.5.1/share/GeoIP/GeoLiteCity.dat')

  for i in 0..0
    ip = File.open("/Users/MacBookPro/Desktop/tcpip_fp/#{i}", "rb")
    content = ip.read
    ip_addresses = content.scan(/[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/)
    puts "#{ip_addresses}"
    ip_addresses.each do |new_ip|
      @new_ip = Address.new(:ip => "#{new_ip}")
      @geocode = db.look_up("#{@new_ip.ip}")
      @new_ip.latitude = @geocode[:latitude].to_i
      @new_ip.longitude = @geocode[:longitude].to_i



      puts "#{@new_ip.ip}, #{@new_ip.latitude}, #{@new_ip.longitude}, #{@new_ip.magnitude}, #{new_ip_array}"
    end
  end

end