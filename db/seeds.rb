# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Start Seeding.."

Lamborghini.create([{
        model: "aventador",
        name: "lp 780-4 ultimae",
        specifications: { displacement: "6,498 cm3 (396.5 cu in)", max_power: "780 CV (574 kW) at 8,500 rpm", top_speed: "355 km/h", acceleration: "2.8 s", transmission: "Electronically controlled all-wheel drive system (Haldex gen. IV) with rear mechanical self-locking differential", combined_consumption: "11 mpg" },
        img_url1: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2022/05_18/gallery/aven_ultimae_01.jpg",
        img_url2: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2022/05_18/gallery/aven_ultimae_02.jpg",
        img_url3: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2022/05_18/s/aven_ultimae_s_01_m.jpg",
        created_by_user: false,
        description: nil,
    },
    
    {
        model: "aventador",
        name: "svj",
        specifications: { displacement: "6,498 cm3 (396.5 cu in)", max_power: "566 kW (770 CV) at 8,500 rpm", top_speed: ">350 km/h", acceleration: "2.8 s", combined_consumption: "10 mpg" },
        img_url1: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/Gallery/aventador_svj_g2.jpg",
        img_url2: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/Gallery/aventador_svj_g3.jpg",
        img_url3: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/Gallery/aventador_svj_g4.jpg",
        created_by_user: false,
        description: nil,
    },

    {
        model: "huracan",
        name: "tecnica",
        specifications: { displacement: "5,204 cm3", max_power: "470/640 kW/CV at 8000 rpm", top_speed: "325 km/h", acceleration: "3.2 s", combined_consumption: "15 mpg" },
        img_url1: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/gallery/hura_tecnica_01a.jpg",
        img_url2: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/gallery/hura_tecnica_02.jpg",
        img_url3: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/gallery/hura_tecnica_04.jpg",
        created_by_user: false,
        description: nil,
    },

    {
        model: "huracan",
        name: "evo",
        specifications: { displacement: "5,204 cm³ (317.57 cu in)", max_power: "640 CV (470 kW) @ 8,000 rpm", top_speed: "km/h >325 (mph > 202)", acceleration: "2.9 s", number_of_cylinders: "10", combined_consumption: "15 mpg" },
        img_url1: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/2021/06_22/Gallery/hurcan_evo_04.jpg",
        img_url2: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/2021/06_22/Gallery/hurcan_evo_01.jpg",
        img_url3: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/2021/06_22/Gallery/hurcan_evo_03.jpg",
        created_by_user: false,
        description: nil,
    },

    {
        model: "urus",
        name: "performante",
        specifications: { displacement: "3,996 cm³ (243.85 cu in)", max_power: "666 CV (490 kW) @ 6,000 rpm", top_speed: "306 km/h", acceleration: "3.3 s", number_of_cylinders: "8", combined_consumption: "16 mpg" },
        img_url1: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/performante/2022/gallery/urus_perfo_02_m.jpg",
        img_url2: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/performante/2022/gallery/urus_perfo_04_m.jpg",
        img_url3: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/gateway_urus/performante/2022/gallery/urus_perfo_05_m.jpg",
        created_by_user: false,
        description: nil,
    },

    {
        model: "huracan",
        name: "evo",
        img_url1: "https://cdn.motor1.com/images/mgl/PRKnK/s1/2017-lamborghini-huracan-lp-610-4.jpg",
        img_url2: "",
        img_url3: "",
        created_by_user: true,
        description: "$75k dropped and I love it!!"
    },

    {
        model: "aventador",
        name: "svj",
        img_url1: "https://www.chicagomotorcars.com/imagetag/8845/48/l/Used-2020-Lamborghini-Aventador-SVJ-LP770-4-Extremely-Rare-Rosso-Efesto-Ad-Personam-Carbon-Fiber-Everywhere.jpg",
        img_url2: "https://www.chicagomotorcars.com/imagetag/8845/33/l/Used-2020-Lamborghini-Aventador-SVJ-LP770-4-Extremely-Rare-Rosso-Efesto-Ad-Personam-Carbon-Fiber-Everywhere.jpg",
        img_url3: "https://www.chicagomotorcars.com/imagetag/8845/68/l/Used-2020-Lamborghini-Aventador-SVJ-LP770-4-Extremely-Rare-Rosso-Efesto-Ad-Personam-Carbon-Fiber-Everywhere.jpg",
        created_by_user: true,
        description: "By Chicago Motor"
    }
])

puts "Seeding Complete!"