# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Language.destroy_all

css = Language.create(name: "CSS", image: "imgs/css.png", value: 100)
html5 = Language.create(name: "HTML5", image: "imgs/html5.png", value: 200)
ruby = Language.create(name: "Ruby", image: "imgs/ruby.png", value: 300)
php = Language.create(name: "PHP", image: "imgs/php.png", value: 400)
js = Language.create(name: "Javascript", image: "imgs/javascript.png", value: 500)
python = Language.create(name: "Python", image: "imgs/python.png", value: 600)
sp = Language.create(name: "Spaghetti", image: "imgs/spaghetti.png", value: -150)

