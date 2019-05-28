require 'json'
require 'pathname'

class String
  def titlize
    return '' if self.length < 1
    c = self.chars
    c.first.upcase!
    c.join
  end
end

puts "Usage: $0 clip_directory" and exit if ARGV.length < 1

base_path = Pathname.new(ARGV[0]).cleanpath
puts "Looking in #{base_path}"

files = []
Dir[File.join(base_path, '*.mp3')].each do |file|
  fn = File.basename(file, '.*')
  name = fn.split('_').map(&:titlize).join(' ')
  files << {name: name, file: file}
end

puts JSON.pretty_generate(files)
