task get_data: :environment do

  data_set = Address.all.map { |a| [a.latitude, a.longitude, a.magnitude.round(3)] }.flatten
  puts "#{data_set}"

end