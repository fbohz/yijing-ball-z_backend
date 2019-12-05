# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# binding.pry

# def self.get_artist_names
#     path = "./public/static.json"
#     File.delete(path) if File.exist?(path)
#     File.new(path, "w+")
#     hash = {}
#     self.all.each do |a|
#         hash["data"] ||= []
#         hash["data"] = { "name" => a.name }
#     end
#     File.write(path, JSON.dump(hash))
# end

# require 'json'

def get_files
    lines_file = File.read("./public/hex_lines.json")
    hexagrams_file = File.read("./public/hexagrams.json")
    @lines_json = JSON.parse(lines_file)
    @hexagrams_json = JSON.parse(hexagrams_file)
end 

# def populate_hexagrams
    get_files
    hexagrams = []
    lines = []
    @hexagrams_json.each.with_index do |h, i|
        hexagrams[i] ||= {}
        hexagrams[i][:number] = h["king_wen_number"]
        hexagrams[i][:english_name] = h["english_name"]
        hexagrams[i][:chinese_name] = h["chinese_name"]
        hexagrams[i][:characters] = h["characters"]
        hexagrams[i][:judgement] = h["judgement"]
        hexagrams[i][:image] = h["image"]
     end 

    @counter = 0 
    @lines_json.each do |v|
        if @counter < 64 && hexagrams[@counter][:number] == v["king_wen_number"]
            lines[@counter] ||= []
            lines[@counter] << v["meaning"] 
            @counter += 1 if v["place"] == 6
        end
    end

    @counter = 0 
    hexagrams.each.with_index do |h, i|
        h[:first_line] = lines[@counter][0]
        h[:second_line] = lines[@counter][1]
        h[:third_line] = lines[@counter][2]
        h[:fourth_line] = lines[@counter][3]
        h[:fifth_line] = lines[@counter][4]
        h[:sixth_line] = lines[@counter][5]
        @counter += 1
    end
    binding.pry

# end


# Hexagram.all
# binding.pry