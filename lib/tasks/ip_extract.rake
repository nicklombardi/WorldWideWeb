task ip_extract: :environment do

  for i in 19..22
    ip = File.open("/Users/MacBookPro/Desktop/tcpip_fp/#{i}", "rb")
    content = ip.read
    ip_addresses = content.scan(/[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/)
    puts "#{ip_addresses}"
    ip_addresses.each do |new_ip|
      new_ip = Address.new(:ip => "#{new_ip}")
      puts "#{new_ip.ip}"
      new_ip.save
    end
  end

end