require 'httparty'
require 'nokogiri'
require 'open-uri'

DOTA_HEROES_URL = 'http://www.dota2.com/heroes/'

class Scrapper

  attr_reader :json_data

  def initialize(url)
    @url = url
    document = HTTParty.get(@url)
    @page ||= Nokogiri::HTML.parse(document)
  end

  def parse
    case @url
    when 'http://www.dota2.com/heroes/' then parse_dota_heroes
    end
  end

  def parse_dota_heroes
    heroes = []
    puts "Parsing Dota heroes..."
    @page.css('.heroPickerIconLink').each_with_index do |hero, index|
      hero_data = { id: index, name: '', class: '', roles: [] }
      hero_document = HTTParty.get(hero[:href])
      hero_page = Nokogiri::HTML.parse(hero_document)
      hero_data[:name] = hero_page.css('#centerColContent h1').inner_html
      hero_data[:roles] = hero_page.css('#heroBioRoles').text.split(' - ')
      hero_data[:class] = hero_data[:roles].shift
      save_image(hero_page.css('#heroPrimaryPortraitImg').attr('src'), hero_data[:name])
      heroes.push(hero_data)
      puts hero_data[:name]
    end
    save_json(heroes, 'dota_heroes.json')
  end

  def save_image(url, name)
    image = open(url)
    IO.copy_stream(image, "./assets/#{name}.png")
  end

  def save_json(arr, name)
    @json_data = JSON.pretty_generate(arr)
    File.open(name,'w') do |f|
      f.write(@json_data)
    end
  end
end

dota_scrapper = Scrapper.new(DOTA_HEROES_URL)
dota_scrapper.parse
