const telegram = "https://t.me/AMUPOTOLOKKATALOG";
const instagram = "https://www.instagram.com/amu_potolok?srtk=YW9nd2RvaGY2YXBh";

const photos = {
  white: "https://cdn4.telesco.pe/file/iplGexFlwB_aHIFmTBJ16zAkF6OXHLdod17Db7qpheckwkAVJoKtyO1Lo_ATTUZO7Y1Y5kOcD15DIRn_zp8yoCYDlbE2bsqfjjzdV0k0Mdj1d4THMeZoY-z3l-o-L7gJbqJaoqeNVlyv_mUFyhGMw2fiaD4CVz1HJqGDMqbzckHTirt44xAwEGrC9JFnB3DEy_6OaGnvjQyJDrEMy9CAc08EsioTgD0NNLYZjwEYNUUFmXi1q-XV69dOs9vGnUZuk24deKtNMkOSnbkZRUJQqK9ERVryI_aNtW9Uvn9xciswYmbnvmexGuAX40GMUt9SraEFj8xPITr85tIaMup3IQ.jpg",
  brown: "https://cdn4.telesco.pe/file/oXHsCaP3BZHem96kid2RkUmMTJGzCTFuVGhI4C8qKGxYx0v3F2EkNeDVCz7H6ej04vK8imoT5Ar-L4VKquYs0Yx6gubOW6Il0wfCLIuWftZ1-gy4QRO7LZZF1zxeyCj4WvLnIkaTGMU3_R2CaXSrqNMziaGto_N47pBlktxlqKkJbMPia9GNBHmqeOVRT_jggkZF4WV6hA9sRZB3-VEKhwc3I3mQRyTneLTjmpsDkBLh9EQiOECbl4QI3kqAYGolkAmE2sZA-2LydLOwWdSFnOMRWPH_dLho-70xFVlL1A1Kb2Zk_P9GJ4LMApdmD27KBUQ_0to_uBZUoqzawHgQsA.jpg",
  flower3d: "https://cdn4.telesco.pe/file/qupc0NN14QeJVHXyOULN-KQDLi0rcnzrExQ96x477P3UkrHXXpDoGfQ7p1Rl3XXU6hZUpCdeYBMQtTUPdLXYnFSUIlgk8GwoWYcioPycXRaJkwfeb-MEUt7cD1ScR2uYxiN_VCoeaxY7J2zilx9Vcq2wUMxswhXkJftks6DrNRmTAZeEXGMTWzrHoou0Z0SKcMzGPCfMhP7NHohe9Imp5UOW12AOyli-IY5jmYkIcIuuLix9so5QOLXV0W0sPW0hdv3FA_Qld2FgTCGBKPYWOJHEBgcoUmnJrOzWwkft6UWBKTmT0m0rbRbMH2bpKIBgocUaHfPor0MkOv0YcNOR_w.jpg",
  kids: [
    "https://cdn4.telesco.pe/file/JoAA2OWfAr9LfG7BwDUWo-Gm39YW_5eqfkhYpp23R63A7WTmWitVvRIFsV4dQv1HRful9rETDEH_rFvKxSus1PsBEomZWNJ_QxuupO5vQP_wcowmsKrWG5s71kDI3iAiGNP90goft59Ofp0zmy7OoBWg92rqBoEG_B9iZmsorTgN0Pnih_61G9I_IsRVGX5ad8IUvYbAd-U43WedKnVCBCF65jpNGD0fzPjsBKPEra_Aezn_ebZM9SEhQktHcpboqJayfqa13FValITqwAehhQyuWbW2q5MO5BN_RqIOrnEz2j12kXONkWTGrgUFQb0VEh5FzfHMeOj3-8ZQVSZWBA.jpg",
    "https://cdn4.telesco.pe/file/snTxrp2AIT4r_ihyBEo9UoendvOgUKVSqA1UKT5w165WI113f_51cvgGykWuViRHS3mk_M1G5INfX_YFYcrkvQpMDw6Pi2xB4jnUY5cjVH4vjR6GUQCJtd-VsKszH-e--7F6ZDwS-RB38DTFX9dms4NxaAk2g2CWDfTf1Vmqh1bCX1HNVRDt9LqGAlV5SSoCXRme8xZfy8Gi9kLr3CmePlp41EnJ9hUUfFGO5E7TPlWufE902XNu13QDCvfR-_X4z_VqKaxWpvpufANl-8PiXvSvT23zF_jNF6080mMAqm1SX90KB6Dq1rye9eyMQ6rn3b6zvpiZuD5aoRaLje9F4Q.jpg",
    "https://cdn4.telesco.pe/file/qYVH_1d7mx5L3DsmpNqiGpzcCVVXLpB8YlEClE5hmYANGT_mQvDcxcf3jVK-pUY6YI4AyvNSF1PXDak9f_-DzXBg1CG6XflHuZKqpN8Vsypz4QPYK98JQAO7o6CqHQ2Iosh412TB4p2-c3zsLyDPK4-6NDrvR2VzFd34KP7D0YY5s3dwVdd_UPS1JH6k4V9POb29xhlnPHRBuWyORcrTpgXkTnWZtLzstKKA3NGonjmImd1wQM9w_rvT4DBEg2GMRNq87OZ1AcxGSfe9eQ5GorIavAgrqDhVnxPlNVuS1UvSqyBIy0Nf5ec41IytpvNAd4axLMPtm9U2n0R-EGIX2A.jpg"
  ],
  night: [
    "https://cdn4.telesco.pe/file/UwK07AZwMBnPyqNDdLXVru9U2avpsr9zXYKP9E_a_LFjSMzrLhnBP-ihX9aaAEiFOVCJ2p9ZreZYXl8MekjcWL2YrzCZUhq7nURzG3CfZ4-d9hX5PDzgQKjl2c31rVTHKoU-qLTs1BgHgWQCYdmybeofYf4NxPDhvC7C7BbKGPgoXaNL-XH7SBP8W31tRw_zskePrPVyCVRFxBUsopqUWWBWf4g9En4ppkX__1OvZG2r8AgPs1p1WMBYA0e0W-LM2IA4TgvAwKUqZCEBhoLa8il1yFCkMASCjTU_BIAU8wzWXtBCM2gsM8Op5yKpQzPG0D-XwAKnzlgZ7NkeHgWyvg.jpg",
    "https://cdn4.telesco.pe/file/bU4bP-xfXfzykiI-cKlJopJGLfRT7RbvlOxu42sSE9O1EPQ9P7nz_H_yZKanHX3O8vxs2dSLPaBGpJ3JSyh9Z7fk5qwK8EHbKIBEBHCK_8QZSExo_HlF-8jaInEKh1bwuJ6Yksayy9S-c6-zVO9kcW9GQsLrcL2QPNGrljzT3UZsdVStRoRMdNjzyk1Hoh8ZYkiOy4AU0hI-jn80xgqiwj8QK6RLPzi0Mm6VE5mDCx6KjpaG0e1kvcud6PehKh66A5JnowzPMw1rt5rBpWSH6GSl-Ay297i-lPprHIpDsUwumuu2No207HAY2sEN0dhvtEUHWjS1Kwm1a4xH5QQpjA.jpg",
    "https://cdn4.telesco.pe/file/H2tn1EZy6E6LTVHkOzQMULSHh13x2ZqoG_soizLJIiBDYWOZVf4_hnwLkCcktkjCnKrVU8I3FX0x6DAjw2BSOPtzhTiRS9VkZV_oZyTrMf6uy_yQXozMD6WjmjwVmLAm4P7dtz_SaWBB8BO0qIN63erBnI-nBr6qMhtFBILKSgUwvpxy_LV9MD3HE2CSoNsbkscmYtO4lJkBxOWCymMEbyj945KYRiqIMtLYO9np5p1MOj-3V4UsFaolrSgLdMdU6IusqHMNJ3WCgCzyyBEFFNsmmjaJ2OUdH9jCk5Y11i_tQs-acqpbZ0KghbmscE2bYZi0hbooUz-KwJGcDkBdSw.jpg"
  ],
  wallpaper: [
    "https://cdn4.telesco.pe/file/NdOhssA155uwWzABbEZ0e_CJQO1EnU04AIjVbIree8H_V7SdXCdZ-qL3T3FlPQU1w5XjrrvKsN9TjMIpfOSZEgsug0D7DvzJixokvg6o9XL_0oORQxxVwXAB94tVUSfHeJ8eGIn6q-_Za5HYtYOXcPAaDRLvGk2mk-Sy1hDBbJwCmAIMHSpq8-JPmpZ4bQHhWiVt8F-7eUQRSDn0b2OgEmFf3CIx5VH1Ummg7AaTB6kwoDGou12cOgqVxIcJKg4zrGx5TAiAUx3iGpb6_ZWijGm_Cu4BfV9Yz8WTCX5ER1RHeMF7jcne-d2R51wYdwHfxL5j1OErMXLvNngGrRj54w.jpg",
    "https://cdn4.telesco.pe/file/UnqNNS4UWHRO84zUggvdNzohzZmGXtClBdHzd4TScjBChyDza0FU6qaI6Jzcbk0HBptQBjvpoF0DURe9c47BmBIK2-grEc6nQ5fH6ylHpHu7kB2LmRkhFvAfS46OFG73bScCj0P9UAh_ZEBTfRtMLOrW0JfflXmJr5Tkt9I__13H3li9ERMrliY4v3IZyHcU5290-v6fRV_VebamlDdbSSqn4jvwMI_R7olzLHT1_cbq2JdI5Lii4ZQnDCUa62QBKDSdFoigcIa7c6RyjarzuRx8gXrJci-Els3xWOMunJctMZDyChIG065VVGLYCVdYc4hD43YEdsjNEaZ2LOVXug.jpg",
    "https://cdn4.telesco.pe/file/O37-Wn2pMPptb1pfihPE06ciDsZsNed3JDMgiyDuac0Kr5psnI8AiXsrFQ3Gr-Jawu8MKuKys5z4AdVGLOzyoI4hkjcPyWAT48w-eZ7xZdVXCxZTAyY6r2o_8rKfGOTtlD_HcxtKjGvVm2P2T4h8oFkMWhdFxCGHy368LwMeCg8EoYlHdAHSDQgvS0Ih0nJEvb-2MO2jRqi_ggzoJsMZvv4WOiK9ArmD5D_pSaxi_g2Dm-P4AaMXo1HobmNFpN7qFFkF9gjBA9cdejjgGe0URRpWlVD9sFdrIrxJDHotgJZIbANb2zHsAhrUIpP_Ib3HMcNimEE4psYIOQwu_smTIw.jpg"
  ],
  floating: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    "https://cdn4.telesco.pe/file/QJHyPvNHygu2_hMprjCdIsKDETxwJ1StweTj0yrKf5LjBm9Wa1c-U8y5ANqhalwIFvTyksJlOdYOr28tF_eJOqSZG9pP7DJT3PkEd3FqncAY6fR6n1dJaOyV4vQG_H6qzqqhiGSNBUEOM9DF58TMRxrY8H6etOTAPWDzcmksoj-c_cPzeS7JFCP9Z9yuG-9-6gc5WJb1NA6JkSr1qh6Qy9_zzqUjMavTMXyuc61SaHjBcFBbfBGJSop4JB5zY0fGyydjU5RO0aN31R7gh668NUNjPYLzXGIXNOBaKrKVY6KeKT3CDcZp69F4_gE-FEBss4LVNF6QBh9GjcTYKoafgA.jpg",
    "https://cdn4.telesco.pe/file/OlpOeidreY38qi3UElaqlZ-gYWwPzPrKDV7VYXjsqBK_N5QVHkFMI1cYuMbzh3YaWHzgbHxblUowoNuOhTfqaWPxNRAzaMui1czkjWi53IRRjJ_dVfoIKG10rv2tZLysLkrL2wTw3VlLseduGMUPULudcI1J17XObKKRl5fyWoQLhnUTKy8auEdIsOTRrDIp6G7WKnTPAR5URgBA3xdz_YfI0hiSCX5Z3aOdDXJ7Yir9LQic3HxNOUDiY0ZA0qFtuAy-4vx8AL5xmfiYsBI9yEOloyxc-b232m790Rv3c-WXTAgNV3z6IgHQBy9GhBmv__I9hLi0mNmNTkeGehowFw.jpg"
  ],
  islamic: [
    "https://t3.ftcdn.net/jpg/20/04/46/24/360_F_2004462473_s6t6VQFlwtCo4RFnoF6aFaIU1PGzX5fk.jpg",
    "https://t4.ftcdn.net/jpg/02/60/18/09/360_F_260180915_AFSfbF0Qg4lKEfT6zEfyok0mWgFb0oS1.jpg",
    "https://thumbs.dreamstime.com/b/saudi-arabia-muslim-pilgrims-perform-tawaf-ritual-circling-kaaba-makkah-maka-pic-mecca-saudi-arabia-december-skyline-423711330.jpg"
  ],
  interior: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1000&q=85"
  ]
};

const categoryData = [
  { id: "solid", names: ["Odnotonniy", "Однотонный", "Однотонный"], price: 35000, unit: "m²", kind: "solid", image: photos.white, designs: [photos.white, photos.interior[0], photos.interior[1]] },
  { id: "new", names: ["Yangi dizaynlar", "Янги дизайнлар", "Новые дизайны"], price: 60000, unit: "m²", image: photos.brown, designs: [photos.brown, photos.interior[1], photos.interior[2]] },
  { id: "dora", names: ["Dora gullar", "Дора гуллар", "Цветы Dora"], price: 55000, unit: "dona", image: photos.interior[3], designs: [photos.interior[3], photos.flower3d, photos.interior[2]] },
  { id: "sky", names: ["Osmon", "Осмон", "Небо"], price: 60000, unit: "m²", image: photos.night[0], designs: [photos.night[0], photos.interior[4], photos.interior[5]] },
  { id: "3d-flowers", names: ["3D gullar", "3D гуллар", "3D цветы"], price: 60000, unit: "m²", image: photos.flower3d, designs: [photos.flower3d, photos.interior[3], photos.interior[0]] },
  { id: "marble", names: ["Mramor", "Мрамор", "Мрамор"], price: 60000, unit: "m²", image: photos.interior[1], designs: [photos.interior[1], photos.interior[4], photos.interior[2]] },
  { id: "3d-elements", names: ["3D elementlar", "3D элементлар", "3D элементы"], price: 60000, unit: "m²", image: photos.interior[5], designs: [photos.interior[5], photos.interior[0], photos.flower3d] },
  { id: "bathroom", names: ["Sanuzel", "Санузел", "Ванная"], price: 60000, unit: "m²", image: photos.interior[4], designs: [photos.interior[4], photos.interior[2], photos.interior[1]] },
  { id: "floating", names: ["Парящие потолки", "Парящие потолки", "Парящие потолки"], price: null, unit: "m²", image: photos.floating[0], designs: photos.floating },
  { id: "night", names: ["Tungi osmon", "Тунги осмон", "Звёздное небо"], price: 60000, unit: "m²", image: photos.night[0], designs: photos.night },
  { id: "kitchen", names: ["Kuxniya", "Кухния", "Кухня"], price: 60000, unit: "m²", image: photos.interior[2], designs: [photos.interior[2], photos.interior[0], photos.interior[5]] },
  { id: "islamic", names: ["Islomiy rasmlar", "Исломий расмлар", "Исламские мотивы"], price: 60000, unit: "m²", image: photos.islamic[0], designs: photos.islamic },
  { id: "wallpaper", names: ["Foto oboy", "Фото обой", "Фотообои"], price: 120000, unit: "m²", image: photos.wallpaper[0], designs: photos.wallpaper },
  { id: "kids", names: ["Bolalar xonasi", "Болалар хонаси", "Детская"], price: 60000, unit: "m²", image: photos.kids[0], designs: photos.kids }
];

const colors = [
  { id: "white-gloss", name: "Oq glans", nameRu: "Белый глянец", hex: "#efeee9", image: photos.white, surface: "Gloss" },
  { id: "white-matte", name: "Oq mat", nameRu: "Белый матовый", hex: "#e4e0d6", image: photos.white, surface: "Mat" },
  { id: "red", name: "Qizil", nameRu: "Красный", hex: "#a83b37", image: photos.interior[1], surface: "Gloss" },
  { id: "blue", name: "Ko‘k", nameRu: "Синий", hex: "#426579", image: photos.interior[2], surface: "Gloss" },
  { id: "black-gloss", name: "Qora glans", nameRu: "Чёрный глянец", hex: "#191b20", image: photos.interior[0], surface: "Gloss" },
  { id: "black-matte", name: "Qora mat", nameRu: "Чёрный матовый", hex: "#242427", image: photos.interior[3], surface: "Mat" },
  { id: "brown", name: "Jigar rang", nameRu: "Коричневый", hex: "#765340", image: photos.brown, surface: "Mat" },
  { id: "moloko-gloss", name: "Moloko glans", nameRu: "Молочный глянец", hex: "#ad886a", image: photos.brown, surface: "Gloss" },
  { id: "moloko-matte", name: "Moloko mat", nameRu: "Молочный матовый", hex: "#ad886a", image: photos.brown, surface: "Mat" }
];

const translations = {
  uz: {
    workspace: "ISH MAYDONI", roleArea: "MAXSUS KABINETLAR", navHome: "Bosh sahifa", navCatalog: "Dizayn katalogi", navCalc: "Narx hisoblash", navSim: "3D simulyator", navOrder: "Buyurtma berish", navOrders: "Buyurtmalarim", navGallery: "Ishlarimiz", navPayments: "To‘lovlar", navWarranty: "Kafolat", navProfile: "Shaxsiy kabinet", navSupport: "Aloqa va yordam", navWorker: "Usta kabineti", navTeam: "Ustalar boshqaruvi", navFinance: "Moliya dashboardi", navAdmin: "Admin panel", supportOnline: "Maslahatchi onlayn", brandLabel: "AMU POTОLOK", home: "Bosh sahifa", catalog: "Dizayn katalogi", calculator: "Narx kalkulyatori", simulator: "3D xona simulyatori", ai: "AMU AI DESIGN", order: "Buyurtma berish", orders: "Buyurtmalarim", gallery: "Ishlarimiz", payments: "To‘lovlar va muddatli to‘lov", warranty: "Kafolat hujjati", profile: "Mijoz shaxsiy kabineti", support: "Aloqa va qo‘llab-quvvatlash", worker: "Usta shaxsiy kabineti", team: "Ustalar boshqaruvi", finance: "Kompaniya moliyasi", admin: "Admin panel", welcome: "Orzuyingizdagi shift —", welcomeAccent: "endi bir qadam yaqin.", subtitle: "Sifat, nafislik va ishonch — barchasi bir joyda. Dizaynni tanlang, narxni hisoblang va buyurtmani kuzating.", viewDesigns: "Dizaynlarni ko‘rish", newOrder: "Buyurtma berish", search: "Dizayn qidirish...", choose: "Tanlash", save: "Saqlash", favorite: "Sevimli", calculate: "Hisoblash", continue: "Davom etish", submit: "Buyurtma yuborish", total: "Jami", area: "Umumiy maydon", category: "Shift turi", width: "Eni (m)", length: "Uzunligi (m)", rooms: "Xonalar", addRoom: "Xona qo‘shish", region: "Hudud", orderNumber: "Buyurtma raqami", noResults: "Bu bo‘limda hozircha dizayn yo‘q.", moreTelegram: "Ko‘proq namunani Telegram katalogda ko‘ring", aiNote: "AI yaratgan tasvir dastlabki vizual namuna, yakuniy material va o‘lchamni mutaxassis tasdiqlaydi.", demo: "Demo prototip: haqiqiy login, to‘lov va ma’lumot saqlash uchun himoyalangan backend kerak."
  },
  uzc: {
    workspace: "ИШ МАЙДОНИ", roleArea: "МАХСУС КАБИНЕТЛАР", navHome: "Бош саҳифа", navCatalog: "Дизайн каталоги", navCalc: "Нарх ҳисоблаш", navSim: "3D симулятор", navOrder: "Буюртма бериш", navOrders: "Буюртмаларим", navGallery: "Ишларимиз", navPayments: "Тўловлар", navWarranty: "Кафолат", navProfile: "Шахсий кабинет", navSupport: "Алоқа ва ёрдам", navWorker: "Уста кабинети", navTeam: "Усталар бошқаруви", navFinance: "Молия панели", navAdmin: "Админ панель", supportOnline: "Маслаҳатчи онлайн", brandLabel: "AMU POTОLOK", home: "Бош саҳифа", catalog: "Дизайн каталоги", calculator: "Нарх калькулятори", simulator: "3D хона симулятори", ai: "AMU AI DESIGN", order: "Буюртма бериш", orders: "Буюртмаларим", gallery: "Ишларимиз", payments: "Тўловлар ва муддатли тўлов", warranty: "Кафолат ҳужжати", profile: "Мижоз шахсий кабинети", support: "Алоқа ва қўллаб-қувватлаш", worker: "Уста шахсий кабинети", team: "Усталар бошқаруви", finance: "Компания молияси", admin: "Админ панель", welcome: "Орзуингиздаги шифт —", welcomeAccent: "энди бир қадам яқин.", subtitle: "Сифат, нафислик ва ишонч — барчаси бир жойда. Дизайн танланг, нархни ҳисобланг ва буюртмани кузатинг.", viewDesigns: "Дизайнларни кўриш", newOrder: "Буюртма бериш", search: "Дизайн қидириш...", choose: "Танлаш", save: "Сақлаш", favorite: "Севимли", calculate: "Ҳисоблаш", continue: "Давом этиш", submit: "Буюртма юбориш", total: "Жами", area: "Умумий майдон", category: "Шифт тури", width: "Эни (м)", length: "Узунлиги (м)", rooms: "Хоналар", addRoom: "Хона қўшиш", region: "Ҳудуд", orderNumber: "Буюртма рақами", noResults: "Бу бўлимда ҳозирча дизайн йўқ.", moreTelegram: "Кўпроқ намунани Telegram каталогида кўринг", aiNote: "AI яратган тасвир дастлабки визуал намуна, якуний материал ва ўлчамни мутахассис тасдиқлайди.", demo: "Демо прототип: ҳақиқий кириш, тўлов ва маълумот сақлаш учун ҳимояланган backend керак."
  },
  ru: {
    workspace: "РАБОЧАЯ ОБЛАСТЬ", roleArea: "СПЕЦИАЛЬНЫЕ КАБИНЕТЫ", navHome: "Главная", navCatalog: "Каталог дизайнов", navCalc: "Расчёт цены", navSim: "3D симулятор", navOrder: "Оформить заказ", navOrders: "Мои заказы", navGallery: "Наши работы", navPayments: "Платежи", navWarranty: "Гарантия", navProfile: "Личный кабинет", navSupport: "Связь и помощь", navWorker: "Кабинет мастера", navTeam: "Управление мастерами", navFinance: "Финансовая панель", navAdmin: "Админ-панель", supportOnline: "Консультант онлайн", brandLabel: "AMU POTОLOK", home: "Главная", catalog: "Каталог дизайнов", calculator: "Калькулятор стоимости", simulator: "3D симулятор комнаты", ai: "AMU AI DESIGN", order: "Оформить заказ", orders: "Мои заказы", gallery: "Наши работы", payments: "Оплата и рассрочка", warranty: "Гарантийный документ", profile: "Кабинет клиента", support: "Контакты и поддержка", worker: "Личный кабинет мастера", team: "Управление мастерами", finance: "Финансы компании", admin: "Админ-панель", welcome: "Потолок вашей мечты —", welcomeAccent: "на шаг ближе.", subtitle: "Качество, элегантность и надёжность в одном месте. Выберите дизайн, рассчитайте стоимость и отслеживайте заказ.", viewDesigns: "Смотреть дизайны", newOrder: "Оформить заказ", search: "Поиск дизайна...", choose: "Выбрать", save: "Сохранить", favorite: "В избранное", calculate: "Рассчитать", continue: "Продолжить", submit: "Отправить заказ", total: "Итого", area: "Общая площадь", category: "Тип потолка", width: "Ширина (м)", length: "Длина (м)", rooms: "Комнаты", addRoom: "Добавить комнату", region: "Регион", orderNumber: "Номер заказа", noResults: "В этом разделе пока нет дизайнов.", moreTelegram: "Больше примеров — в каталоге Telegram", aiNote: "Изображение AI — предварительный визуальный пример; материал и размеры подтверждает специалист.", demo: "Демо-прототип: для реального входа, оплаты и хранения данных нужен защищённый backend."
  }
};

const defaultPrices = Object.fromEntries(categoryData.map((item) => [item.id, item.price]));
const appState = {
  page: "home",
  category: "solid",
  language: localStorage.getItem("amu-language") || "uz",
  role: localStorage.getItem("amu-role") || "client",
  prices: loadJson("amu-prices", defaultPrices),
  regionFees: loadJson("amu-region-fees", { amu: 0, tashkent: 0, other: 0 }),
  orders: loadJson("amu-orders", []),
  favorites: new Set(loadJson("amu-favorites", [])),
  selectedDesign: null,
  roomCount: 1,
  roomMeasurements: [{ width: "", length: "" }],
  measurementRequested: false,
  orderLocation: "",
  roomColor: "#d7d1c4",
  roomName: "Mehmonxona",
  roomNight: false,
  spotsOn: true,
  ledOn: true,
  quote: { total: 0, area: 0, subtotal: 0, transport: 0, discount: 0 },
  installmentMonths: 5,
  linkedCards: [false, false],
  paymentPlan: "split",
  backupConsent: false,
  installmentConsent: false,
  generated: false,
  photoData: "",
  galleryFilter: "all"
};

const pageContent = document.querySelector("#page-content");
const toastElement = document.querySelector("#toast");
const safeNumber = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
const tr = (key) => (translations[appState.language] || translations.uz)[key] || translations.uz[key] || key;

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function money(value) {
  return `${Math.round(safeNumber(value)).toLocaleString("uz-UZ")} so‘m`;
}

function categoryName(category) {
  const index = appState.language === "ru" ? 2 : appState.language === "uzc" ? 1 : 0;
  return category.names[index];
}

function notify(message) {
  toastElement.textContent = message;
  toastElement.classList.add("visible");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toastElement.classList.remove("visible"), 3200);
}

function pageTitle(page) {
  if (page === "category") {
    const category = categoryData.find((item) => item.id === appState.category);
    return category ? categoryName(category) : tr("catalog");
  }
  return tr(page);
}

function setPage(page) {
  const restricted = page === "worker" && appState.role !== "worker";
  const ownerPage = ["team", "finance", "admin"].includes(page) && appState.role !== "owner";
  if (restricted || ownerPage) {
    notify(appState.language === "ru" ? "Этот раздел доступен только соответствующей демо-роли." : "Bu bo‘lim tanlangan demo roliga mos emas.");
    page = "home";
  }
  appState.page = page;
  document.querySelector("#page-breadcrumb").textContent = pageTitle(page);
  const activePage = page === "category" ? "catalog" : page;
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === activePage);
  });
  document.querySelector("#sidebar").classList.remove("open");
  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyLanguage() {
  document.documentElement.lang = appState.language === "ru" ? "ru" : appState.language === "uzc" ? "uz-Cyrl" : "uz";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = tr(element.dataset.i18n);
    if (translation) element.textContent = translation;
  });
  document.querySelector("#page-breadcrumb").textContent = pageTitle(appState.page);
  renderPage();
}

function pageHead(title, description, action = "") {
  return `<div class="page-head"><div><div class="overline">AMU POTОLOK · SMART CEILING</div><h1>${title}</h1><p>${description}</p></div>${action ? `<div class="head-actions">${action}</div>` : ""}</div>`;
}

function imageTag(src, alt = "AMU POTОLOK shift dizayni", className = "") {
  return `<img class="${className}" src="${src}" alt="${escapeHtml(alt)}" loading="lazy" referrerpolicy="no-referrer">`;
}

function categoryCard(category) {
  const name = categoryName(category);
  const amount = category.designs.length;
  return `<button type="button" class="category-card" data-open-category="${category.id}">${imageTag(category.image, name)}<div class="category-card-copy"><h3>${name}</h3><small>${amount} ta namuna · ${category.price ? `${money(category.price)}/${category.unit}` : "narxni admin belgilaydi"}</small><span>↗</span></div></button>`;
}

function renderHome() {
  const latest = [
    { title: "Yumshoq yorug‘lik", category: categoryData[0], image: photos.white },
    { title: "Osmon manzarasi", category: categoryData[9], image: photos.night[1] },
    { title: "Gul naqshli 3D", category: categoryData[4], image: photos.flower3d },
    { title: "Zamonaviy interyer", category: categoryData[8], image: photos.floating[1] }
  ];
  return `
    <section class="home-hero">
      <div class="home-hero-copy">
        <div class="overline">NAFISLIK · ANIQLIK · ISHONCH</div>
        <h1>${tr("welcome")}<br><span>${tr("welcomeAccent")}</span></h1>
        <p>${tr("subtitle")}</p>
        <div class="hero-buttons"><button class="button button-gold" data-page="catalog">${tr("viewDesigns")} <span>↗</span></button><button class="button button-orange" data-page="order">${tr("newOrder")} <span>＋</span></button></div>
      </div>
      <div class="home-hero-side">
        <div class="hero-stat"><b>10+</b><small>yillik tajriba</small></div>
        <div class="hero-stat"><b>10 000+</b><small>mamnun mijozlar</small></div>
        <div class="hero-stat"><b>24/7</b><small>buyurtma qabul qilish</small></div>
      </div>
    </section>
    <div class="stat-grid">
      <div class="stat-card"><span class="stat-icon">◇</span><div><strong>10 yil</strong><small>Material kafolati</small></div></div>
      <div class="stat-card"><span class="stat-icon">⚒</span><div><strong>Professional</strong><small>Tajribali ustalar</small></div></div>
      <div class="stat-card"><span class="stat-icon">✓</span><div><strong>1 yil</strong><small>Montaj kafolati</small></div></div>
      <div class="stat-card"><span class="stat-icon">⌖</span><div><strong>Qulay xizmat</strong><small>O‘lchash va yetkazish</small></div></div>
    </div>
    <div class="home-grid">
      <section class="card card-pad">
        <div class="card-title"><div><h2>Bir qadamda boshlang</h2><p>Kerakli vositani tanlang</p></div><span class="pill">SMART PLATFORM</span></div>
        <div class="quick-grid">
          <button class="quick-card" data-page="calculator"><span>⊞</span><div><b>Narxni hisoblash</b><small>Maydon va hudud bo‘yicha</small></div></button>
          <button class="quick-card" data-page="simulator"><span>◈</span><div><b>3D simulyator</b><small>Xonangizni tasavvur qiling</small></div></button>
          <button class="quick-card" data-page="ai"><span>✦</span><div><b>AMU AI DESIGN</b><small>Vizual g‘oyalar oling</small></div></button>
          <button class="quick-card" data-page="order"><span>＋</span><div><b>Buyurtma berish</b><small>Mutaxassis bilan bog‘laning</small></div></button>
          <button class="quick-card" data-page="orders"><span>◷</span><div><b>Buyurtmani kuzatish</b><small>Status va tarix</small></div></button>
          <button class="quick-card" data-page="warranty"><span>◇</span><div><b>Kafolat shartlari</b><small>10 yil material · 1 yil ish</small></div></button>
        </div>
      </section>
      <section class="card card-pad social-card">
        <div class="card-title"><div><h2>Bizning kataloglar</h2><p>Ko‘proq g‘oya va real namunalarga o‘ting</p></div></div>
        <a class="social-link" href="${telegram}" target="_blank" rel="noopener noreferrer"><div><b>Telegram katalog</b><small>AMU POTОLOK KATALOG</small></div><span>↗</span></a>
        <a class="social-link" href="${instagram}" target="_blank" rel="noopener noreferrer"><div><b>Instagram</b><small>@amu_potolok</small></div><span>↗</span></a>
        <div class="discount-banner">Ikkala sahifaga ham obuna bo‘lsangiz, buyurtmada <b>2% chegirma</b> so‘rang. Demo belgi obunani avtomatik tekshirmaydi.</div>
      </section>
    </div>
    <section class="section-spacer">
      <div class="card-title"><div><h2>Ommabop dizaynlar</h2><p>Yangi loyiha uchun ilhom oling</p></div><button class="button button-quiet" data-page="catalog">Barchasini ko‘rish ↗</button></div>
      <div class="design-strip">${latest.map((item) => `<button class="design-mini" data-open-category="${item.category.id}">${imageTag(item.image, item.title)}<div><b>${item.title}</b><small>${categoryName(item.category)}</small></div></button>`).join("")}</div>
    </section>
    <div class="notice info section-spacer">${tr("demo")}</div>`;
}

function renderCatalog() {
  return `${pageHead(tr("catalog"), "14 ta shift kategoriyasi. “Ishlarimiz” alohida galereyada, “Fayllar” bo‘limi olib tashlangan.", `<a class="button button-quiet" href="${telegram}" target="_blank" rel="noopener noreferrer">${tr("moreTelegram")} ↗</a>`)}
    <div class="catalog-toolbar"><label class="search-field"><span>⌕</span><input id="catalog-search" type="search" placeholder="${tr("search")}" autocomplete="off"></label><select class="filter-select" id="catalog-sort" aria-label="Kategoriyalarni saralash"><option value="default">Tavsiya etilgan</option><option value="az">A—Z</option><option value="price">Narxi bo‘yicha</option></select><span class="catalog-result" id="catalog-result">14 kategoriya</span></div>
    <div class="category-grid" id="category-grid">${categoryData.map(categoryCard).join("")}</div>`;
}

function designCard(category, src, index) {
  const title = category.id === "solid" ? colors[index]?.name || "Shift namunasi" : `${categoryName(category)} · ${String(index + 1).padStart(2, "0")}`;
  const price = appState.prices[category.id];
  const key = `${category.id}-${index}`;
  const fav = appState.favorites.has(key);
  return `<article class="design-card">
    <div class="design-image" data-preview="${key}">${imageTag(src, title)}<button class="favorite-button ${fav ? "is-favorite" : ""}" type="button" data-favorite="${key}" aria-label="Sevimlilarga qo‘shish">${fav ? "♥" : "♡"}</button></div>
    <div class="design-card-info"><div><h3>${title}</h3><p>${price ? `${money(price)}/${category.unit}` : "Narxni admin tasdiqlaydi"}${category.id === "solid" ? ` · ${colors[index]?.surface || "Mat"}` : ""}</p></div><button class="button button-gold" data-design-order="${key}">${tr("choose")}</button></div>
  </article>`;
}

function renderCategory() {
  const category = categoryData.find((item) => item.id === appState.category) || categoryData[0];
  const designImages = category.id === "solid" ? colors.map((item) => item.image) : category.designs;
  const title = categoryName(category);
  const rate = appState.prices[category.id];
  return `${pageHead(title, `${category.designs.length === 3 ? "Dizayn namunalarini ko‘ring, sevimlilarga saqlang yoki buyurtmaga tanlang." : "Rang va yuza variantini tanlang; Moloko rangi kofe tusida."} ${rate ? `Boshlang‘ich narx: ${money(rate)}/${category.unit}.` : "Narxni admin kiritadi."}`, `<button class="button button-quiet" data-page="catalog">← Kategoriyalar</button>`)}
    ${category.id === "solid" ? `<div class="notice info color-note">Moloko glans va mat bir xil iliq och-jigarrang kofe tusida; farqi faqat yuza ko‘rinishida. Glans yorug‘likni aks ettiradi, mat esa xira.</div>` : ""}
    <div class="design-grid section-spacer">${designImages.map((src, index) => designCard(category, src, index)).join("")}</div>
    <div class="card card-pad section-spacer"><div class="card-title"><div><h2>O‘zingizga mosini topmadingizmi?</h2><p>To‘liq katalogda qo‘shimcha rasmlar mavjud.</p></div><a class="button button-gold" href="${telegram}" target="_blank" rel="noopener noreferrer">Telegram katalogga o‘tish ↗</a></div></div>`;
}

function roomRowsMarkup() {
  return Array.from({ length: appState.roomCount }, (_, index) => `<div class="room-row" data-room-row="${index}">
    <div class="room-row-title">Xona ${index + 1}</div>
    <div class="field"><label>${tr("width")}</label><input class="room-width" type="number" min="0.1" max="100" step="0.01" value="${escapeHtml(appState.roomMeasurements[index]?.width ?? "")}" placeholder="3.50"></div>
    <div class="field"><label>${tr("length")}</label><input class="room-length" type="number" min="0.1" max="100" step="0.01" value="${escapeHtml(appState.roomMeasurements[index]?.length ?? "")}" placeholder="5.00"></div>
    <button class="remove-room" type="button" data-remove-room="${index}" aria-label="Xonani o‘chirish" ${appState.roomCount === 1 ? "disabled" : ""}>×</button>
  </div>`).join("");
}

function renderCalculator() {
  const options = categoryData.map((category) => `<option value="${category.id}" ${category.id === appState.category ? "selected" : ""}>${categoryName(category)}</option>`).join("");
  return `${pageHead(tr("calculator"), "Xona o‘lchamlarini kiriting. Hisob-kitob taxminiy; yakuniy narx o‘lchov va material tasdig‘idan so‘ng belgilanadi.", `<button class="button button-quiet" data-page="order">${tr("newOrder")} ↗</button>`)}
    <div class="calculator-layout">
      <section class="card card-pad">
        <div class="card-title"><div><h2>1. Shift va hududni tanlang</h2><p>Qoraqalpog‘iston va Amudaryo tumani uchun bir xil asosiy tarif qo‘llanadi.</p></div><span class="pill">UZS</span></div>
        <div class="field-row">
          <div class="field"><label>${tr("category")}</label><select id="calc-category">${options}</select></div>
          <div class="field"><label>${tr("region")}</label><select id="calc-region"><option value="amu">Amudaryo / Qoraqalpog‘iston</option><option value="tashkent">Toshkent shahri</option><option value="other">Boshqa viloyat / tuman</option></select></div>
        </div>
        <div class="section-spacer">
          <div class="card-title"><div><h2>2. Xona o‘lchamlari</h2><p>O‘lchamlarni metrda kiriting. Har bir xona alohida hisoblanadi.</p></div><button class="button" type="button" id="add-room">＋ ${tr("addRoom")}</button></div>
          <div class="room-list" id="room-list">${roomRowsMarkup()}</div>
          <div class="field dora-quantity" id="dora-quantity"><label>Dora gullar soni (dona)</label><input id="dora-count" type="number" min="1" value="1"></div>
          <div class="notice warning range-warning" id="measurement-warning"></div>
        </div>
        <div class="field-row section-spacer">
          <div class="field"><label>Xonalar soni</label><input id="room-count-input" type="number" min="1" max="20" value="${appState.roomCount}" readonly></div>
          <div class="field"><label>O‘lchash xizmati</label><button class="button" type="button" id="measure-order">Mutaxassis kelib o‘lchab bersin</button></div>
        </div>
        <div class="divider"></div>
        <label class="consent-row"><input id="measure-confirm" type="checkbox"><span>Buyurtma yuborishdan oldin kiritgan o‘lchamlarimni tekshirganimni tasdiqlayman. O‘lchash xatosi bo‘yicha javobgarlik shartlarini o‘qidim.</span></label>
      </section>
      <aside class="card card-pad estimate-panel">
        <div class="card-title"><div><h2>Hisob-kitob</h2><p>Hududiy qo‘shimcha narx admin tomonidan belgilanadi.</p></div><span class="pill">TAXMINIY</span></div>
        <div class="estimate-total" id="estimate-total">— so‘m</div>
        <div class="estimate-lines"><div class="estimate-line"><span>${tr("area")}</span><strong id="estimate-area">0 m²</strong></div><div class="estimate-line"><span>Asosiy narx</span><strong id="estimate-base">0 so‘m</strong></div><div class="estimate-line"><span>Hudud transporti</span><strong id="estimate-transport">Admin tasdiqlaydi</strong></div><div class="estimate-line"><span>Obuna chegirmasi</span><strong id="estimate-discount">0 so‘m</strong></div></div>
        <label class="consent-row"><input id="subscribe-discount" type="checkbox"><span>Telegram va Instagram’ga obuna bo‘ldim — 2% chegirma so‘rayman. Obuna demo rejimida tekshirilmaydi.</span></label>
        <div class="section-spacer"><button class="button button-gold" id="calculate-price" type="button">${tr("calculate")} ↻</button> <button class="button button-orange" id="calc-continue" type="button">${tr("continue")} →</button></div>
        <p class="small muted section-spacer">Dora gullar donalab hisoblanadi. Qolgan ko‘rsatilgan narxlar m² uchun. Transport summasi admin tasdig‘idan so‘ng qo‘shiladi.</p>
      </aside>
    </div>`;
}

function renderSimulator() {
  const swatches = [
    ["#efeee9", "Oq glans"], ["#ad886a", "Moloko"], ["#1b1b20", "Qora"], ["#8a453e", "Qizil"], ["#48657b", "Ko‘k"], ["#765340", "Jigar rang"]
  ];
  return `${pageHead(tr("simulator"), "Rang, yoritish va xona ko‘rinishini taxminan sinab ko‘ring. Saqlangan loyiha faqat shu qurilmada demo tarzida qoladi.", `<button class="button" id="sim-download" type="button">Rasmni yuklab olish ↓</button>`)}
    <div class="simulator-layout">
      <section class="room-stage day" id="room-stage">
        <div class="room-scene" id="room-scene"><div class="room-ceiling" id="room-ceiling"></div><div class="room-back"></div><div class="room-left"></div><div class="room-floor"></div><div class="room-window"></div><div class="room-lamp"></div><span class="spotlight s1"></span><span class="spotlight s2"></span><span class="spotlight s3"></span><span class="spotlight s4"></span></div>
        <div class="stage-caption"><span id="room-caption">${appState.roomName} · taxminiy 3D ko‘rinish</span><span id="lighting-caption">Kunduzgi yorug‘lik</span></div>
      </section>
      <aside class="card card-pad sim-controls">
        <div class="card-title"><div><h2>Simulyator boshqaruvi</h2><p>O‘zgarishlar xona maketida darhol ko‘rinadi</p></div><span class="pill">PREVIEW</span></div>
        <div class="field"><label>Xona turi</label><select id="room-type"><option>Mehmonxona</option><option>Yotoqxona</option><option>Oshxona</option><option>Sanuzel</option><option>Bolalar xonasi</option></select></div>
        <div><div class="field-label">Shift rangi</div><div class="swatch-row section-spacer">${swatches.map(([hex, name], index) => `<button class="swatch ${index === 0 ? "selected" : ""}" type="button" style="background:${hex}" data-color="${hex}" aria-label="${name}" title="${name}"></button>`).join("")}</div></div>
        <div class="field"><label>Yuza</label><select id="surface-type"><option value="gloss">Glans — yorug‘likni aks ettiradi</option><option value="mat">Mat — xira yuza</option></select></div>
        <div class="toggle-row"><span>LED perimetr yoritish</span><button class="toggle on" type="button" data-toggle="led" aria-pressed="true" aria-label="LED yoritish"></button></div>
        <div class="toggle-row"><span>Spot chiroqlar</span><button class="toggle on" type="button" data-toggle="spots" aria-pressed="true" aria-label="Spot chiroqlar"></button></div>
        <div class="toggle-row"><span>Tungi ko‘rinish</span><button class="toggle" type="button" data-toggle="night" aria-pressed="false" aria-label="Tungi ko‘rinish"></button></div>
        <div class="field-row"><button class="button" id="compare-design" type="button">Dizaynlarni taqqoslash</button><button class="button button-gold" id="save-project" type="button">Loyihani saqlash</button></div>
        <div class="notice info small">Bu CSS asosidagi vizual prototip, professional 3D render emas. Yakuniy rang va yoritish real materialda farq qilishi mumkin.</div>
      </aside>
    </div>
    <div class="card card-pad section-spacer hidden" id="compare-panel"><div class="card-title"><h2>Taqqoslash: tanlangan yuza va mavjud namuna</h2><button class="button" id="hide-compare">Yopish</button></div><div class="design-strip"><div class="design-mini">${imageTag(photos.white, "Oq shift") }<div><b>Hozirgi tanlov</b><small>Simulyator rangi</small></div></div><div class="design-mini">${imageTag(photos.brown, "Moloko rang shift") }<div><b>Moloko namunasi</b><small>Issiq kofe tusi</small></div></div></div></div>`;
}

function renderAI() {
  const results = appState.generated ? [photos.flower3d, photos.night[0], photos.kids[1], photos.floating[1]] : [photos.white, photos.interior[1]];
  return `${pageHead(tr("ai"), "Xona rasmini yuklang, rang va yoritish g‘oyalarini tanlang. Hozirgi versiya AI xizmatisiz namunaviy variantlarni ko‘rsatadi.")}
    <div class="ai-layout">
      <section class="card card-pad">
        <div class="card-title"><div><h2>AI dizayn sozlamalari</h2><p>Rasm ushbu qurilmada ko‘rib chiqiladi</p></div><span class="pill">AI PREVIEW</span></div>
        <label class="upload-zone" for="room-photo"><span>⇧</span><b>Xona rasmini yuklang</b><small>JPG yoki PNG · ixtiyoriy</small><input type="file" id="room-photo" accept="image/*">${appState.photoData ? `<img class="upload-preview" src="${appState.photoData}" alt="Yuklangan xona rasmi">` : ""}</label>
        <div class="field-row section-spacer"><div class="field"><label>Shift turi</label><select id="ai-category">${categoryData.map((category) => `<option value="${category.id}">${categoryName(category)}</option>`).join("")}</select></div><div class="field"><label>Yoritish</label><select id="ai-lighting"><option>LED perimetr</option><option>Spot chiroqlar</option><option>Lyustra va spotlar</option><option>Minimal</option></select></div></div>
        <div class="field section-spacer"><label>Rang kayfiyati</label><select id="ai-color"><option>Moloko kofe tusi</option><option>Oq va iliq yorug‘lik</option><option>To‘q va zamonaviy</option><option>Osmon va yulduzlar</option></select></div>
        <button class="button button-gold section-spacer" type="button" id="generate-ai">✦ Dizayn g‘oyalarini yaratish</button>
        <div class="notice warning ai-disclaimer">${tr("aiNote")} Hozirgi prototipda haqiqiy AI tasvir yaratish integratsiyasi ulanmagan.</div>
      </section>
      <section class="card card-pad"><div class="card-title"><div><h2>${appState.generated ? "Siz uchun vizual g‘oyalar" : "Dizayn variantlari"}</h2><p>${appState.generated ? "Rasmlar — ilhom uchun namunalar" : "Yaratish tugmasi demo variantlarni almashtiradi"}</p></div></div><div class="ai-results">${results.map((image, index) => `<article class="ai-result">${imageTag(image, `AI dizayn varianti ${index + 1}`)}<div><b>${["Yumshoq va nafis", "Zamonaviy yorug‘lik", "Oila uchun iliq muhit", "Yulduzli tun"][index]}</b><small>Vizual konsept · mutaxassis bilan tasdiqlang</small><button class="button section-spacer" data-ai-select="${index}" type="button">Buyurtmaga tanlash</button></div></article>`).join("")}</div></section>
    </div>`;
}

function renderOrder() {
  const category = categoryData.find((item) => item.id === appState.category) || categoryData[0];
  const quote = appState.quote.total || 0;
  return `${pageHead(tr("order"), "Mutaxassis buyurtmangizni tasdiqlash uchun bog‘lanadi. Yuborilgan ma’lumotlar demo rejimida ushbu qurilmada saqlanadi.")}
    <div class="order-layout">
      <form class="card card-pad" id="order-form">
        <div class="form-section-title"><span class="step-number">1</span> Mijoz ma’lumotlari</div>
        <div class="field-row"><div class="field"><label>Ism familiya</label><input name="name" required placeholder="Ismingiz"></div><div class="field"><label>Telefon raqami</label><input name="phone" type="tel" required placeholder="+998 __ ___ __ __"></div></div>
        <div class="form-section-title"><span class="step-number">2</span> Hudud va manzil</div>
        <div class="region-row"><div class="field"><label>${tr("region")}</label><select name="region" id="order-region"><option>Amudaryo tumani</option><option>Qoraqalpog‘iston Respublikasi</option><option>Toshkent shahri</option><option>O‘zbekistonning boshqa hududlari</option></select></div><div class="field"><label>Tuman / shahar</label><input name="district" placeholder="Tuman nomi"></div></div>
        <div class="field section-spacer"><label>To‘liq manzil</label><input name="address" required placeholder="Ko‘cha, uy, mo‘ljal"></div>
        <div class="field-row section-spacer"><button class="button" type="button" id="locate-me">⌖ Lokatsiyani yuborish</button><span class="location-result" id="location-result"></span></div>
        <div class="form-section-title"><span class="step-number">3</span> Buyurtma tafsilotlari</div>
        <div class="field-row"><div class="field"><label>${tr("category")}</label><select name="category" id="order-category">${categoryData.map((item) => `<option value="${item.id}" ${item.id === category.id ? "selected" : ""}>${categoryName(item)}</option>`).join("")}</select></div><div class="field"><label>Dizayn</label><input name="design" id="order-design" value="${escapeHtml(appState.selectedDesign?.title || "")}" placeholder="Dizayn nomi yoki rang"></div></div>
        <div class="field-row three section-spacer"><div class="field"><label>Xonalar soni</label><input name="rooms" type="number" min="1" max="20" value="${appState.roomCount}" readonly></div><div class="field"><label>Taxminiy narx</label><input name="quote" value="${quote ? money(quote) : "Kalkulyatorda hisoblang"}" readonly></div><div class="field"><label>O‘lchamlar</label><input value="${appState.roomMeasurements.map((room, index) => `X${index + 1}: ${room.width || "—"} × ${room.length || "—"} m`).join(" · ")}" readonly></div></div>
        <div class="field-row section-spacer"><button class="button" type="button" id="edit-measurements">O‘lchamlarni tahrirlash</button><button class="button" type="button" id="measure-order">Mutaxassis o‘lchasin</button></div>
        <div class="field section-spacer"><label>Qo‘shimcha izoh</label><textarea name="note" placeholder="O‘lcham, yoritish yoki boshqa talablar">${appState.measurementRequested ? "Mutaxassis kelib o‘lchab berishini so‘rayman." : ""}</textarea></div>
        <div class="field section-spacer"><label>Xona rasmi (ixtiyoriy)</label><input type="file" name="photo" accept="image/*"></div>
        <label class="consent-row section-spacer"><input name="confirm" type="checkbox" required><span>O‘lchamlarni buyurtmadan oldin tekshiraman. O‘zim o‘lchab xato qilsam qo‘shimcha material xarajati mening zimmamda; kompaniya xodimi o‘lchashda xato qilsa, qo‘shimcha material xarajatini kompaniya qoplaydi.</span></label>
        <label class="consent-row section-spacer"><input name="terms" type="checkbox" required><span>Ma’lumotlarimni buyurtma bo‘yicha bog‘lanish uchun ishlatishga roziman.</span></label>
        <button class="button button-gold section-spacer" type="submit">${tr("submit")} ↗</button>
      </form>
      <aside class="card card-pad order-summary">
        <div class="card-title"><div><h2>Buyurtma xulosasi</h2><p>Yakuniy narx joyida o‘lchangach tasdiqlanadi</p></div><span class="pill">30 / 70</span></div>
        <div class="summary-price">${quote ? money(quote) : "Narx hisoblanmagan"}</div>
        ${quote ? `<div class="estimate-lines"><div class="estimate-line"><span>Oldindan to‘lov (30%)</span><strong>${money(quote * .3)}</strong></div><div class="estimate-line"><span>Ish tugagach (70%)</span><strong>${money(quote * .7)}</strong></div><div class="estimate-line"><span>Kategoriya</span><strong>${categoryName(category)}</strong></div></div>` : `<div class="notice info">Avval xona o‘lchamlarini kalkulyatorda kiriting yoki mutaxassis o‘lchovini so‘rang.</div>`}
        <div class="notice info">Agar aniq o‘lcham bo‘lmasa, mutaxassis kelib o‘lchash xizmatini tanlang. Hududiy transport narxini admin tasdiqlaydi.</div>
        <div class="section-spacer"><button class="button button-quiet" data-page="calculator">O‘lcham va narxni tahrirlash ↗</button></div>
      </aside>
    </div>`;
}

function renderOrders() {
  const orders = appState.orders;
  const statuses = ["Yangi buyurtma", "Qabul qilindi", "O‘lchash jarayonida", "Ishlab chiqarilmoqda", "O‘rnatish jarayonida", "Yakunlandi"];
  return `${pageHead(tr("orders"), "Buyurtma yuborilgach, holat o‘zgarishlarini shu sahifada kuzating.", `<button class="button button-gold" data-page="order">＋ Yangi buyurtma</button>`)}
    ${orders.length ? orders.map((order) => {
      const step = Math.max(0, statuses.indexOf(order.status));
      return `<article class="card card-pad section-spacer"><div class="card-title"><div><h2>${escapeHtml(order.id)} · ${escapeHtml(order.categoryName)}</h2><p>${escapeHtml(order.date)} · ${escapeHtml(order.address)}</p></div>${appState.role === "owner" ? `<select class="filter-select" data-order-status="${escapeHtml(order.id)}">${statuses.map((status) => `<option ${status === order.status ? "selected" : ""}>${status}</option>`).join("")}</select>` : `<span class="status-badge">${escapeHtml(order.status)}</span>`}</div><div class="order-status-list">${statuses.map((status, index) => `<div class="status-step ${index < step ? "done" : ""} ${index === step ? "current" : ""}"><span class="status-dot"></span><div><b>${status}</b><small>${index < step ? "Bajarildi" : index === step ? "Joriy holat" : "Kutilmoqda"}</small></div></div>`).join("")}</div><div class="divider"></div><div class="estimate-line"><span>Taxminiy jami</span><strong>${money(order.total)}</strong></div><div class="estimate-line section-spacer"><span>30% boshlang‘ich to‘lov</span><strong>${money(order.total * .3)}</strong></div>${order.measurements?.length ? `<div class="small muted section-spacer">O‘lchamlar: ${order.measurements.map((room, index) => `X${index + 1} ${escapeHtml(room.width)} × ${escapeHtml(room.length)} m`).join(" · ")}</div>` : ""}</article>`;
    }).join("") : `<div class="card empty-state">Sizda hali buyurtma yo‘q.<br><button class="button button-gold section-spacer" data-page="catalog">Dizayn tanlash →</button></div>`}
    <div class="notice info section-spacer">${tr("demo")} Buyurtmalar serverga yuborilmaydi.</div>`;
}

function renderProfile() {
  const latest = appState.orders[0];
  const savedProject = loadJson("amu-saved-project", null);
  const favoriteCards = [...appState.favorites].map(parseDesignKey).filter(Boolean);
  return `${pageHead(tr("profile"), "Buyurtmalaringiz, saqlangan dizaynlar va to‘lov ma’lumotlari.", `<button class="button button-gold" data-page="order">＋ Buyurtma berish</button>`)}
    <div class="stat-grid">
      <div class="stat-card"><span class="stat-icon">◷</span><div><strong>${appState.orders.length}</strong><small>Buyurtmalar</small></div></div>
      <div class="stat-card"><span class="stat-icon">♥</span><div><strong>${favoriteCards.length}</strong><small>Sevimli dizaynlar</small></div></div>
      <div class="stat-card"><span class="stat-icon">₽</span><div><strong>${latest ? money(latest.total * .7) : "—"}</strong><small>Taxminiy qolgan 70%</small></div></div>
      <div class="stat-card"><span class="stat-icon">◇</span><div><strong>10 yil / 1 yil</strong><small>Material / montaj kafolati</small></div></div>
    </div>
    <div class="home-grid">
      <section class="card card-pad"><div class="card-title"><div><h2>So‘nggi buyurtma</h2><p>Holat va buyurtma tafsilotlari</p></div><button class="button button-quiet" data-page="orders">Barchasi ↗</button></div>
        ${latest ? `<div class="order-card"><div><h3>${escapeHtml(latest.id)} · ${escapeHtml(latest.categoryName)}</h3><p>${escapeHtml(latest.date)} · ${escapeHtml(latest.address)}</p></div><span class="status-badge">${escapeHtml(latest.status)}</span></div><div class="estimate-lines section-spacer"><div class="estimate-line"><span>Taxminiy jami</span><strong>${money(latest.total)}</strong></div><div class="estimate-line"><span>To‘langan</span><strong>${money(latest.total * .3)}</strong></div><div class="estimate-line"><span>Qolgan</span><strong>${money(latest.total * .7)}</strong></div></div>` : `<div class="empty-state">Buyurtma tarixi bo‘sh.<br>Tanlangan dizaynni buyurtmaga yuboring.</div>`}
      </section>
      <section class="card card-pad"><div class="card-title"><div><h2>Mening ma’lumotlarim</h2><p>Demo profil · haqiqiy login ulanmagan</p></div><span class="avatar">AM</span></div>
        <div class="estimate-lines"><div class="estimate-line"><span>Ism</span><strong>${latest ? escapeHtml(latest.name) : "Buyurtma yuborilganda to‘ldiriladi"}</strong></div><div class="estimate-line"><span>Telefon</span><strong>${latest ? escapeHtml(latest.phone) : "—"}</strong></div><div class="estimate-line"><span>Til</span><strong>${appState.language === "ru" ? "Русский" : appState.language === "uzc" ? "Ўзбекча" : "O‘zbekcha"}</strong></div></div>
        <div class="divider"></div><div class="card-title"><div><h3>Saqlangan loyiha</h3><p>${savedProject ? `${escapeHtml(savedProject.room)} · ${escapeHtml(savedProject.color)}` : "Hozircha loyiha saqlanmagan"}</p></div><button class="button" data-page="simulator">3D simulyator</button></div>
        <div class="notice warning">Buyurtma va profil demo ma’lumotlari faqat ushbu brauzerda saqlanadi. Haqiqiy mijoz ma’lumotlari uchun himoyalangan akkaunt va backend kerak.</div>
      </section>
    </div>
    <section class="section-spacer"><div class="card-title"><div><h2>Sevimli dizaynlar</h2><p>Ushbu qurilmada saqlangan namunalar</p></div><button class="button button-quiet" data-page="catalog">Katalogga o‘tish ↗</button></div>
      ${favoriteCards.length ? `<div class="design-grid">${favoriteCards.map(({ category, index }) => designCard(category, category.id === "solid" ? colors[index]?.image : category.designs[index % category.designs.length], index)).join("")}</div>` : `<div class="empty-state">Dizayn kartasidagi ♡ belgisini bosing — tanlovlaringiz shu yerda ko‘rinadi.</div>`}
    </section>
    <section class="card card-pad section-spacer"><div class="card-title"><div><h2>To‘lovlar tarixi</h2><p>Haqiqiy to‘lov provayderi ulanmagan</p></div><button class="button" data-page="payments">To‘lov rejasini ko‘rish</button></div><div class="empty-state">Tasdiqlangan tranzaksiya yo‘q. Demo sahifada karta ma’lumoti yig‘ilmaydi.</div></section>`;
}

function renderGallery() {
  const work = [
    ["Mehmonxona · Moloko mat", photos.brown, "Toshkent · zamonaviy loyiha"],
    ["Yulduzli osmon", photos.night[2], "Yotoqxona · yoritish bilan"],
    ["Bolalar xonasi", photos.kids[1], "Bolalar xonasi · rangli dizayn"],
    ["3D gul naqshi", photos.flower3d, "Mehmonxona · 3D ko‘rinish"],
    ["Foto oboy", photos.wallpaper[1], "Alohida bosma dizayn"],
    ["Парящие потолки", photos.floating[2], "LED perimetr yoritish"]
  ];
  return `${pageHead(tr("gallery"), "AMU POTОLOK katalogi va mijoz taqdim etgan rasmlardan namunaviy galereya. Rasm ustiga bosib, original Telegram postini oching.", `<a class="button button-quiet" href="${telegram}" target="_blank" rel="noopener noreferrer">Telegram katalog ↗</a>`)}
    <div class="gallery-grid">${work.map(([name, image, note], index) => `<a class="gallery-card" href="${[telegram + "/8/2842", telegram + "/36/1940", telegram + "/478/1286", telegram + "/2/2937", telegram + "/1034/2032", telegram + "/2741/2751?single"][index]}" target="_blank" rel="noopener noreferrer">${imageTag(image, name)}<div><b>${name}</b><small>${note}</small></div></a>`).join("")}</div>
    <div class="notice info section-spacer">“Oldin va keyin” rasmlari mijozlardan ruxsat olingach qo‘shiladi. Hozirgi galereya — dizayn namunalaridan iborat.</div>`;
}

function renderPayments() {
  const total = appState.quote.total || 0;
  const months = appState.installmentMonths;
  const monthly = Math.ceil(total / months);
  const today = new Date();
  const schedule = Array.from({ length: months }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth() + index + 1, 2);
    return `<div class="schedule-row"><span>${date.toLocaleDateString("uz-UZ", { month: "long", day: "numeric" })}</span><strong>${money(monthly)}</strong></div>`;
  }).join("");
  return `${pageHead(tr("payments"), "To‘lov usulini tanlang. Haqiqiy tranzaksiya va karta bog‘lash to‘lov provayderi integratsiyasini talab qiladi.")}
    <div class="payment-grid">
      <section class="card card-pad"><div class="card-title"><div><h2>To‘lov usuli</h2><p>Umumiy buyurtma qiymati: ${money(total)}</p></div><span class="pill">UZS</span></div>
        <div class="payment-options">
          <label class="payment-option"><input type="radio" name="payment-plan" value="split" ${appState.paymentPlan === "split" ? "checked" : ""}><span class="provider-mark">30/70</span><span><b>30% oldindan + 70% yakunda</b><small>O‘rnatish tugagandan keyin qolgan summa</small></span></label>
          <label class="payment-option"><input type="radio" name="payment-plan" value="full" ${appState.paymentPlan === "full" ? "checked" : ""}><span class="provider-mark">100%</span><span><b>To‘liq to‘lov</b><small>Bir martalik to‘lov. Chegirma shartlari admin bilan tasdiqlanadi.</small></span></label>
          <label class="payment-option"><input type="radio" name="payment-plan" value="installment" ${appState.paymentPlan === "installment" ? "checked" : ""}><span class="provider-mark">5 OY</span><span><b>1–5 oygacha muddatli to‘lov</b><small>Oylik to‘lov oyning 2-sanasida rejalashtiriladi.</small></span></label>
        </div>
        <div class="field-label section-spacer">To‘lov provayderlari · demo</div><div class="provider-row"><span>payme</span><span>CLICK</span><span>Xazna</span></div>
        <div class="divider"></div>
        <div class="field"><label>Muddat (oy)</label><select id="installment-months">${[1,2,3,4,5].map((value) => `<option value="${value}" ${value === months ? "selected" : ""}>${value} oy</option>`).join("")}</select></div>
        <div class="notice warning section-spacer">Hurmatli mijoz! Muddatli to‘lovda 2 ta bank kartasi talab etiladi. Oylik to‘lov har oyning 2-sanasida avtomatik yechib olinishi mumkin; bu faqat bank/provayder imkoniyati va alohida rozilik asosida ishlaydi. Hozir avtomatik yechish ulanmagan.</div>
      </section>
      <section class="card card-pad installment-box"><div class="card-title"><div><h2>To‘lov jadvali</h2><p>Qo‘shimcha foiz: 0 so‘m · demo hisob</p></div><span class="pill">2-SANA</span></div>
        <div class="finance-value">${money(monthly)} <small class="muted">/ oy</small></div>
        <div class="schedule-row"><span>Umumiy qiymat</span><strong>${money(total)}</strong></div>
        <div id="schedule-list">${schedule}</div>
        <div class="divider"></div>
        <div class="safe-card"><div><b>Birinchi karta</b><small>${appState.linkedCards[0] ? "Demo token · •••• 2148" : "Himoyalangan provayder orqali ulanadi"}</small></div><span class="lock">♧</span><button class="button" type="button" data-link-card="0">${appState.linkedCards[0] ? "Ulangan" : "Demo ulash"}</button></div>
        <div class="safe-card"><div><b>Zaxira karta</b><small>${appState.linkedCards[1] ? "Demo token · •••• 9071" : "Alohida rozilik bilan ulanadi"}</small></div><span class="lock">♧</span><button class="button" type="button" data-link-card="1">${appState.linkedCards[1] ? "Ulangan" : "Demo ulash"}</button></div>
        <label class="consent-row"><input id="backup-consent" type="checkbox" ${appState.backupConsent ? "checked" : ""}><span>Zaxira kartadan to‘lov yechilishiga alohida roziman.</span></label>
        <label class="consent-row"><input id="installment-consent" type="checkbox" ${appState.installmentConsent ? "checked" : ""}><span>To‘lov jadvali va muddatli to‘lov shartlarini o‘qidim va roziman.</span></label>
        <div class="notice info small">Karta raqami, CVV, PIN va SMS kodni bu demo sahifaga kiritmang. Haqiqiy karta faqat provayderning tokenlashtirilgan xavfsiz oynasida ulanadi.</div>
        <button class="button button-gold" id="confirm-payment-plan" type="button">To‘lov rejasini tasdiqlash</button>
      </section>
    </div>`;
}

function renderWarranty() {
  const latest = appState.orders[0];
  return `${pageHead(tr("warranty"), "Elektron kafolat hujjati buyurtma yakunlangandan va o‘rnatish tasdiqlangandan so‘ng rasmiylashtiriladi.")}
    <div class="home-grid">
      <section class="card card-pad"><div class="card-title"><div><h2>AMU POTОLOK kafolatlari</h2><p>Himoya shartlari va amal qilish muddati</p></div><span class="pill">PREMIUM CARE</span></div>
        <div class="stat-grid"><div class="stat-card"><span class="stat-icon">◇</span><div><strong>10 yil</strong><small>Shift materiali</small></div></div><div class="stat-card"><span class="stat-icon">⚒</span><div><strong>1 yil</strong><small>Ish va o‘rnatish</small></div></div></div>
        <div class="checklist"><div class="notice success">✓ Material kafolati: mahsulot hujjatida ko‘rsatilgan shartlarga muvofiq 10 yil.</div><div class="notice success">✓ Montaj kafolati: bajarilgan ish va o‘rnatishga 1 yil.</div><div class="notice info">Kafolat muddati o‘rnatish sanasi va rasmiy buyurtma hujjati bilan boshlanadi.</div></div>
        <button class="button button-gold section-spacer" id="download-warranty" type="button">Kafolat ma’lumotini yuklab olish ↓</button>
      </section>
      <section class="card card-pad"><div class="card-title"><div><h2>Hujjat namunasi</h2><p>Shaxsiy ma’lumot demo holatda</p></div></div>
        <div class="estimate-lines"><div class="estimate-line"><span>Mijoz</span><strong>${latest ? escapeHtml(latest.name) : "Buyurtma yuborilganda to‘ldiriladi"}</strong></div><div class="estimate-line"><span>Buyurtma</span><strong>${latest ? escapeHtml(latest.id) : "—"}</strong></div><div class="estimate-line"><span>Shift turi</span><strong>${latest ? escapeHtml(latest.categoryName) : "—"}</strong></div><div class="estimate-line"><span>O‘rnatilgan sana</span><strong>${latest?.status === "Yakunlandi" ? escapeHtml(latest.date) : "Ish tugagach kiritiladi"}</strong></div></div>
        <div class="notice warning">Bu sahifa kafolatni haqiqiy rasmiy hujjat sifatida bermaydi. Rasmiy hujjatni kompaniya tasdiqlashi kerak.</div>
      </section>
    </div>`;
}

function renderSupport() {
  const orderPhones = ["+998-95-224-10-41", "+998-99-667-69-36", "+998-93-332-36-12"];
  const helpPhones = ["+998-20-006-10-41", "+998-93-332-36-12"];
  return `${pageHead(tr("support"), "Savol, buyurtma yoki taklif bo‘yicha biz bilan bog‘laning.")}
    <div class="support-numbers">
      <section class="card card-pad"><div class="card-title"><div><h2>Buyurtma qabul qilish</h2><p>Qo‘ng‘iroq qilish uchun raqamni bosing</p></div><span class="pill">ORDER</span></div><div class="phone-list">${orderPhones.map((phone) => `<a class="phone-link" href="tel:${phone.replaceAll("-", "")}">☎ &nbsp; ${phone}</a>`).join("")}</div></section>
      <section class="card card-pad"><div class="card-title"><div><h2>Mijozlarni qo‘llab-quvvatlash</h2><p>Buyurtma bo‘yicha yordam</p></div><span class="pill">HELP</span></div><div class="phone-list">${helpPhones.map((phone) => `<a class="phone-link" href="tel:${phone.replaceAll("-", "")}">☎ &nbsp; ${phone}</a>`).join("")}</div></section>
    </div>
    <div class="home-grid section-spacer">
      <section class="card card-pad"><div class="card-title"><div><h2>Jonli chat · demo</h2><p>Xabarlar hozir faqat brauzer oynasida ko‘rinadi</p></div><span class="pill">LOCAL</span></div>
        <div class="chat-messages" id="chat-messages"><div class="chat-message">Assalomu alaykum! AMU POTОLOK xizmatiga xush kelibsiz. Sizga qanday yordam beramiz?</div></div>
        <form class="chat-form" id="chat-form"><input name="message" required placeholder="Xabaringizni yozing..."><button class="button button-gold" type="submit">Yuborish</button></form>
        <div class="field section-spacer"><label>Shikoyat yoki taklif yuborish (demo)</label><textarea id="feedback" placeholder="Fikringizni yozing"></textarea><button class="button section-spacer" type="button" id="send-feedback">Yuborish</button></div>
      </section>
      <section class="card card-pad"><div class="card-title"><div><h2>Ijtimoiy tarmoqlar</h2><p>Yangi dizayn va loyihalarimiz</p></div></div><div class="social-grid">
        <a class="social-tile" href="${telegram}" target="_blank" rel="noopener noreferrer"><div><b>Telegram katalog</b><small>AMU POTОLOK KATALOG</small></div><span>↗</span></a>
        <a class="social-tile" href="${instagram}" target="_blank" rel="noopener noreferrer"><div><b>Instagram sahifamiz</b><small>@amu_potolok</small></div><span>↗</span></a>
      </div>      <div class="discount-banner section-spacer">Ikkala sahifaga obuna bo‘lganda 2% chegirma bo‘yicha buyurtma operatoriga murojaat qiling. Ijtimoiy tarmoq obunasini backend orqali tekshirish hozir demo rejimida ulanmagan.</div>
      <div class="divider"></div><div class="card-title"><div><h2>Tez-tez so‘raladigan savollar</h2></div></div><details><summary>O‘lchashni bilmasam nima qilaman?</summary><p class="muted small">Buyurtma formasida mutaxassis kelib o‘lchashini so‘rang.</p></details><details><summary>Material va montaj kafolati qancha?</summary><p class="muted small">Materialga 10 yil, ish va o‘rnatishga 1 yil.</p></details><details><summary>Narx qachon aniq bo‘ladi?</summary><p class="muted small">Mutaxassis o‘lchov va materialni tasdiqlagandan keyin.</p></details></section>
    </div>`;
}

function renderWorker() {
  return `${pageHead(tr("worker"), "Usta faqat o‘ziga biriktirilgan ishlar va daromad demo ma’lumotlarini ko‘radi.", `<span class="pill">USTA DEMO · PRIVATE VIEW</span>`)}
    <div class="stat-grid"><div class="stat-card"><span class="stat-icon">★</span><div><strong>4.9 / 5</strong><small>Shaxsiy reyting</small></div></div><div class="stat-card"><span class="stat-icon">✓</span><div><strong>28</strong><small>Bajarilgan ish</small></div></div><div class="stat-card"><span class="stat-icon">₽</span><div><strong>${money(8400000)}</strong><small>Hisoblangan daromad</small></div></div><div class="stat-card"><span class="stat-icon">◷</span><div><strong>${money(1800000)}</strong><small>To‘lanishi kutilmoqda</small></div></div></div>
    <div class="home-grid"><section class="card card-pad"><div class="card-title"><div><h2>Mening buyurtmalarim</h2><p>Faqat ushbu usta uchun ko‘rinadigan demo vazifalar</p></div></div><article class="order-card"><div><h3>AMU-1042 · Mehmonxona</h3><p>O‘lchash yakunlandi · Amudaryo</p></div><span class="status-badge">O‘rnatish</span></article><article class="order-card"><div><h3>AMU-1047 · Yotoqxona</h3><p>Material tayyor · Qoraqalpog‘iston</p></div><span class="status-badge">Jarayonda</span></article></section>
    <section class="card card-pad"><div class="card-title"><div><h2>Oxirgi baholar</h2><p>Mijozlarning fikrlari</p></div></div><div class="notice success"><span class="review-stars">★★★★★</span><br>“Ishni ozoda va vaqtida yakunladi.”<br><small>Demo mijoz · 2025</small></div><div class="notice info section-spacer"><span class="review-stars">★★★★★</span><br>“Yoritish juda chiroyli chiqdi.”<br><small>Demo mijoz · 2025</small></div></section></div>
    <div class="notice warning section-spacer">Usta kabineti haqiqiy login va server-side ruxsatsiz shaxsiy yoki moliyaviy ma’lumotlarni himoya qilmaydi. Hozirgi rol tanlagichi faqat prototip.</div>`;
}

function renderTeam() {
  const workers = [
    ["A. Usta", "+998 •• ••• •• 41", "4.9", "28", "8 400 000", "1 800 000"],
    ["B. Usta", "+998 •• ••• •• 73", "4.8", "21", "6 200 000", "900 000"],
    ["C. Usta", "+998 •• ••• •• 06", "5.0", "16", "5 100 000", "650 000"]
  ];
  return `${pageHead(tr("team"), "Xodimlar va ularning ish ko‘rsatkichlari. Quyidagi ma’lumotlar — prototip uchun sun’iy demo ma’lumot.")}
    <div class="stat-grid"><div class="stat-card"><span class="stat-icon">⚒</span><div><strong>3</strong><small>Faol usta</small></div></div><div class="stat-card"><span class="stat-icon">✓</span><div><strong>65</strong><small>Jami ishlar</small></div></div><div class="stat-card"><span class="stat-icon">★</span><div><strong>4.9</strong><small>O‘rtacha reyting</small></div></div><div class="stat-card"><span class="stat-icon">₽</span><div><strong>${money(3350000)}</strong><small>To‘lov qoldig‘i · demo</small></div></div></div>
    <section class="card card-pad"><div class="card-title"><div><h2>Ustalar ro‘yxati</h2><p>Rollar va to‘lovlar bo‘yicha admin ko‘rinishi</p></div><button class="button button-gold" id="add-worker">＋ Usta qo‘shish</button></div>
    <div class="team-row"><b>Usta · telefon</b><b>Reyting / ish</b><b>Hisoblangan</b><b>Qoldiq</b></div>${workers.map((worker) => `<div class="team-row"><span>${worker[0]}<br><small class="muted">${worker[1]}</small></span><span><i class="review-stars">★ ${worker[2]}</i><br>${worker[3]} ish</span><span>${money(worker[4])}</span><span>${money(worker[5])}</span></div>`).join("")}</section>
    <div class="notice warning section-spacer">Ustalar ma’lumotlariga real kirishni faqat backenddagi tekshirilgan OWNER/ADMIN akkaunti boshqarishi kerak. Bu demo menyu xavfsizlik chegarasi emas.</div>`;
}

function renderFinance() {
  const values = [["Umumiy tushum", "128 450 000"], ["Xarajatlar", "47 800 000"], ["Sof foyda · demo", "80 650 000"], ["Ochiq qarzlar", "18 200 000"]];
  const bars = [40,58,48,70,53,82,63,92,68,76,88,60];
  return `${pageHead(tr("finance"), "Faqat OWNER/ADMIN demo rolida ko‘rinadi. Raqamlar o‘quv prototipi uchun sun’iy qiymatlar.", `<span class="pill">OWNER VIEW</span>`)}
    <div class="finance-grid">${values.map(([label, amount]) => `<div class="card card-pad"><small class="muted">${label}</small><div class="finance-value section-spacer">${amount} <small class="muted">so‘m</small></div><small class="green-text">↑ demo statistika</small></div>`).join("")}</div>
    <div class="home-grid section-spacer"><section class="card card-pad"><div class="card-title"><div><h2>Tushum va xarajatlar</h2><p>12 oylik ko‘rsatkich · demo</p></div><span class="pill">2025</span></div><div class="bar-chart">${bars.map((height, index) => `<div class="bar-group"><i class="bar" style="height:${height}%"></i><i class="bar alt" style="height:${Math.max(14,height-28)}%"></i><span class="bar-label">${["Yan","Fev","Mar","Apr","May","Iyn","Iyl","Avg","Sen","Okt","Noy","Dek"][index]}</span></div>`).join("")}</div><p class="small muted section-spacer">Oltin — tushum · to‘q sariq — xarajat (namunaviy ma’lumot)</p></section>
    <section class="card card-pad"><div class="card-title"><div><h2>Moliyaviy bo‘limlar</h2><p>Hisobotlarda demo ma’lumot ko‘rsatiladi</p></div></div><div class="estimate-lines">${["Buyurtmalardan tushgan pul","Oldindan to‘lovlar","Material xarajatlari","Transport xarajatlari","Ustalarga to‘langan"].map((item, index) => `<div class="estimate-line"><span>${item}</span><strong>${money([128450000,38535000,32400000,4700000,22100000][index])}</strong></div>`).join("")}</div></section></div>
    <div class="notice warning section-spacer">Kompaniya daromadi va ustalarning haqiqiy to‘lovlari uchun backendda Owner ruxsati tekshirilishi shart. Brauzerdagi rol almashtirgich maxfiylikni ta’minlamaydi.</div>`;
}

function renderAdmin() {
  const fees = appState.regionFees;
  return `${pageHead(tr("admin"), "Narxlar va hududiy qo‘shimcha xarajatlarni boshqarish demo paneli. O‘zgarishlar faqat shu brauzer localStorage’ida saqlanadi.", `<span class="pill">OWNER / ADMIN</span>`)}
    <div class="home-grid"><section class="card card-pad"><div class="card-title"><div><h2>Kategoriya narxlari</h2><p>So‘m / m², Dora gullar — dona</p></div></div><div id="admin-prices">${categoryData.map((category) => `<label class="admin-price-row"><span>${categoryName(category)}</span><input type="number" min="0" step="1000" data-admin-price="${category.id}" value="${appState.prices[category.id] ?? ""}" placeholder="Narxni kiriting"><small>${category.unit === "dona" ? "dona" : "m²"}</small></label>`).join("")}</div><button class="button button-gold section-spacer" id="save-prices">Narxlarni saqlash</button></section>
    <section class="card card-pad"><div class="card-title"><div><h2>Hududiy transport qo‘shimchasi</h2><p>Amudaryo va Qoraqalpog‘iston bir xil tarifda</p></div></div>
      <div class="field"><label>Amudaryo / Qoraqalpog‘iston · so‘m</label><input type="number" min="0" step="10000" data-region-fee="amu" value="${fees.amu}"></div>
      <div class="field section-spacer"><label>Toshkent shahri · so‘m</label><input type="number" min="0" step="10000" data-region-fee="tashkent" value="${fees.tashkent}"></div>
      <div class="field section-spacer"><label>Boshqa hududlar · so‘m</label><input type="number" min="0" step="10000" data-region-fee="other" value="${fees.other}"></div>
      <button class="button button-gold section-spacer" id="save-region-fees">Hudud narxlarini saqlash</button>
      <div class="divider"></div><button class="button" data-page="orders">Buyurtmalarni ko‘rish ↗</button></section></div>
    <div class="notice warning section-spacer">Faqat UI demo. Real admin panelida login, server tomonida rol tekshiruvi, audit log va ruxsatlar backendda amalga oshirilishi kerak.</div>`;
}

function renderNotifications() {
  return `${pageHead("Bildirishnomalar", "Buyurtma, o‘lchash va to‘lov holati haqida xabarlar.")}
    <div class="card card-pad">${[
      ["Yangi dizaynlar katalogga qo‘shildi", "Bugun · Katalogni ko‘rib chiqing", "●"],
      ["Kafolat ma’lumotlari tayyor", "Materialga 10 yil · Ishga 1 yil", "◇"],
      ["Buyurtma holati yangilanishi", appState.orders[0]?.status || "Birinchi buyurtmangizni yuboring", "◷"]
    ].map(([title, detail, icon]) => `<div class="order-card"><div><h3>${title}</h3><p>${detail}</p></div><span class="gold-text">${icon}</span></div>`).join("")}</div>`;
}

function renderPage() {
  const renderers = {
    home: renderHome, catalog: renderCatalog, category: renderCategory, calculator: renderCalculator, simulator: renderSimulator, ai: renderAI, order: renderOrder, orders: renderOrders, profile: renderProfile, gallery: renderGallery, payments: renderPayments, warranty: renderWarranty, support: renderSupport, worker: renderWorker, team: renderTeam, finance: renderFinance, admin: renderAdmin, notifications: renderNotifications
  };
  pageContent.innerHTML = (renderers[appState.page] || renderHome)();
  document.querySelector("#order-nav-count").textContent = appState.orders.length;
  bindPageEvents();
}

function openCategory(id) {
  appState.category = id;
  appState.page = "category";
  const item = categoryData.find((category) => category.id === id);
  document.querySelector("#page-breadcrumb").textContent = item ? categoryName(item) : tr("catalog");
  document.querySelectorAll("[data-page]").forEach((button) => button.classList.toggle("active", button.dataset.page === "catalog"));
  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function parseDesignKey(key) {
  const category = categoryData.find((item) => key.startsWith(`${item.id}-`));
  if (!category) return null;
  const index = Number(key.slice(category.id.length + 1));
  return Number.isInteger(index) ? { category, categoryId: category.id, index } : null;
}

function openDesignPreview(category, index) {
  const image = category.id === "solid" ? colors[index]?.image : category.designs[index % category.designs.length];
  const title = category.id === "solid" ? colors[index]?.name : `${categoryName(category)} · ${String(index + 1).padStart(2, "0")}`;
  document.querySelector("#preview-image").src = image;
  document.querySelector("#preview-image").alt = title;
  document.querySelector("#preview-category").textContent = categoryName(category);
  document.querySelector("#preview-title").textContent = title;
  document.querySelector("#preview-description").textContent = `Boshlang‘ich narx: ${appState.prices[category.id] ? money(appState.prices[category.id]) + "/" + category.unit : "admin tasdiqlaydi"}. Yakuniy ko‘rinish, o‘lcham va materialni mutaxassis bilan tasdiqlang.`;
  appState.selectedDesign = { categoryId: category.id, index, title };
  document.querySelector("#preview-dialog").showModal();
}

function calculateQuote(showWarning = false) {
  const categoryId = document.querySelector("#calc-category")?.value || appState.category;
  const category = categoryData.find((item) => item.id === categoryId);
  if (!category) return;
  appState.category = categoryId;
  const maxWidth = categoryId === "solid" ? 5 : 3.2;
  const maxLength = 100;
  const warning = document.querySelector("#measurement-warning");
  let totalArea = 0;
  let invalid = false;
  const roomRows = [...document.querySelectorAll(".room-row")];
  appState.roomMeasurements = roomRows.map((row) => ({
    width: row.querySelector(".room-width").value,
    length: row.querySelector(".room-length").value
  }));
  if (categoryId !== "dora") {
    roomRows.forEach((row, index) => {
      const widthInput = row.querySelector(".room-width");
      const lengthInput = row.querySelector(".room-length");
      const width = Number(widthInput.value);
      const length = Number(lengthInput.value);
      const widthInvalid = !width || width > maxWidth;
      const lengthInvalid = !length || length > maxLength || length <= 0;
      widthInput.setCustomValidity(widthInvalid ? `Eni ${maxWidth.toFixed(2)} metrdan oshmasin.` : "");
      lengthInput.setCustomValidity(lengthInvalid ? "Uzunlik 100 metrgacha bo‘lishi kerak." : "");
      if (widthInvalid || lengthInvalid) invalid = true;
      if (!widthInvalid && !lengthInvalid) totalArea += width * length;
    });
  }
  const hasMeasurement = roomRows.some((row) => row.querySelector(".room-width").value || row.querySelector(".room-length").value);
  warning.classList.toggle("visible", invalid && (showWarning || hasMeasurement));
  if (invalid) {
    warning.textContent = `${categoryName(category)} uchun eni ${maxWidth.toFixed(2)} m gacha, uzunligi 100 m gacha. Har bir xonaning o‘lchamini tekshiring.`;
    if (showWarning) document.querySelector(".room-width:invalid, .room-length:invalid")?.reportValidity();
  } else {
    warning.textContent = "";
  }
  const quantity = Math.max(0, Number(document.querySelector("#dora-count")?.value || 1));
  const rate = safeNumber(appState.prices[categoryId]);
  const areaSubtotal = categoryId === "dora" ? quantity * rate : totalArea * rate;
  const region = document.querySelector("#calc-region")?.value || "amu";
  const transport = safeNumber(appState.regionFees[region]);
  const gross = areaSubtotal + transport;
  const discount = document.querySelector("#subscribe-discount")?.checked ? Math.round(gross * .02) : 0;
  const total = Math.max(0, gross - discount);
  appState.quote = { total, area: totalArea, subtotal: areaSubtotal, transport, discount };
  const priceLabel = appState.prices[categoryId] === null ? "Admin narx kiritadi" : money(rate);
  document.querySelector("#estimate-total").textContent = invalid
    ? hasMeasurement ? "O‘lchamni tekshiring" : "O‘lcham kiriting"
    : appState.prices[categoryId] === null ? priceLabel : money(total);
  document.querySelector("#estimate-area").textContent = categoryId === "dora" ? `${quantity} dona` : `${totalArea.toFixed(2)} m²`;
  document.querySelector("#estimate-base").textContent = appState.prices[categoryId] === null ? "Narx belgilanmagan" : money(areaSubtotal);
  document.querySelector("#estimate-transport").textContent = `${money(transport)} · admin tarifi`;
  document.querySelector("#estimate-discount").textContent = `− ${money(discount)}`;
  const doraField = document.querySelector("#dora-quantity");
  doraField?.classList.toggle("visible", categoryId === "dora");
  return !invalid && appState.prices[categoryId] !== null;
}

function addRoom() {
  if (appState.roomCount >= 20) {
    notify("Bir buyurtmada ko‘pi bilan 20 ta xona qo‘shiladi.");
    return;
  }
  appState.roomMeasurements.push({ width: "", length: "" });
  appState.roomCount = appState.roomMeasurements.length;
  renderPage();
  calculateQuote();
}

function saveDesign(categoryId, index) {
  const key = `${categoryId}-${index}`;
  if (appState.favorites.has(key)) appState.favorites.delete(key);
  else appState.favorites.add(key);
  localStorage.setItem("amu-favorites", JSON.stringify([...appState.favorites]));
  renderPage();
  notify(appState.favorites.has(key) ? "Dizayn sevimlilarga saqlandi." : "Dizayn sevimlilardan olib tashlandi.");
}

function handlePageClick(event) {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    setPage(pageButton.dataset.page);
    return;
  }
  const categoryButton = event.target.closest("[data-open-category]");
  if (categoryButton) {
    openCategory(categoryButton.dataset.openCategory);
    return;
  }
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const design = parseDesignKey(favoriteButton.dataset.favorite);
    if (design) saveDesign(design.categoryId, design.index);
    return;
  }
  const previewTarget = event.target.closest("[data-preview]");
  if (previewTarget) {
    const design = parseDesignKey(previewTarget.dataset.preview);
    if (design) openDesignPreview(design.category, design.index);
    return;
  }
  const orderButton = event.target.closest("[data-design-order]");
  if (orderButton) {
    const design = parseDesignKey(orderButton.dataset.designOrder);
    if (!design) return;
    const { category, categoryId, index } = design;
    appState.selectedDesign = { categoryId, index, title: category?.id === "solid" ? colors[index]?.name : `${categoryName(category)} · ${String(index + 1).padStart(2, "0")}` };
    appState.category = categoryId;
    document.querySelector("#preview-dialog").close();
    setPage("order");
    return;
  }
  const aiButton = event.target.closest("[data-ai-select]");
  if (aiButton) {
    appState.selectedDesign = { categoryId: document.querySelector("#ai-category").value, index: Number(aiButton.dataset.aiSelect), title: `AMU AI DESIGN · variant ${Number(aiButton.dataset.aiSelect) + 1}` };
    appState.category = appState.selectedDesign.categoryId;
    setPage("order");
    return;
  }
  const cardButton = event.target.closest("[data-link-card]");
  if (cardButton) {
    const index = Number(cardButton.dataset.linkCard);
    if (index === 1 && !appState.backupConsent) {
      notify("Zaxira kartani ulashdan oldin alohida rozilikni belgilang.");
      return;
    }
    appState.linkedCards[index] = true;
    renderPage();
    notify("Demo karta tokeni ulandi. Haqiqiy karta ma’lumoti kiritilmadi.");
    return;
  }
}

function bindPageEvents() {
  const categorySearch = document.querySelector("#catalog-search");
  categorySearch?.addEventListener("input", () => {
    const query = categorySearch.value.trim().toLocaleLowerCase();
    const cards = [...document.querySelectorAll(".category-card")];
    let visible = 0;
    cards.forEach((card) => {
      const category = categoryData.find((item) => item.id === card.dataset.openCategory);
      const show = categoryName(category).toLocaleLowerCase().includes(query);
      card.hidden = !show;
      if (show) visible += 1;
    });
    document.querySelector("#catalog-result").textContent = `${visible} kategoriya`;
  });
  document.querySelector("#catalog-sort")?.addEventListener("change", (event) => {
    const grid = document.querySelector("#category-grid");
    const sorted = [...categoryData];
    if (event.target.value === "az") sorted.sort((a, b) => categoryName(a).localeCompare(categoryName(b)));
    if (event.target.value === "price") sorted.sort((a, b) => (appState.prices[a.id] ?? Infinity) - (appState.prices[b.id] ?? Infinity));
    grid.innerHTML = sorted.map(categoryCard).join("");
  });

  document.querySelector("#calc-category")?.addEventListener("change", (event) => {
    appState.category = event.target.value;
    calculateQuote();
  });
  document.querySelector("#calc-region")?.addEventListener("change", () => calculateQuote());
  document.querySelector("#subscribe-discount")?.addEventListener("change", () => calculateQuote());
  document.querySelector("#dora-count")?.addEventListener("input", () => calculateQuote());
  document.querySelector("#room-list")?.addEventListener("input", () => calculateQuote());
  document.querySelector("#room-list")?.addEventListener("change", () => calculateQuote());
  document.querySelector("#add-room")?.addEventListener("click", addRoom);
  document.querySelector("#room-list")?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-room]");
    if (!removeButton || appState.roomCount <= 1) return;
    appState.roomMeasurements.splice(Number(removeButton.dataset.removeRoom), 1);
    appState.roomCount = appState.roomMeasurements.length;
    renderPage();
    calculateQuote();
  });
  document.querySelector("#calculate-price")?.addEventListener("click", () => {
    if (calculateQuote(true)) notify("Taxminiy narx hisoblandi.");
  });
  document.querySelector("#calc-continue")?.addEventListener("click", () => {
    if (!document.querySelector("#measure-confirm").checked) return notify("Davom etishdan oldin o‘lchamlarni tekshirganingizni tasdiqlang.");
    if (!calculateQuote(true)) return notify("O‘lcham yoki narxni tekshiring.");
    appState.roomCount = Math.max(1, document.querySelectorAll(".room-row").length);
    appState.category = document.querySelector("#calc-category").value;
    setPage("order");
  });
  document.querySelector("#measure-order")?.addEventListener("click", () => {
    appState.measurementRequested = true;
    setPage("order");
    notify("Buyurtmada manzil va telefonni kiriting; mutaxassis o‘lchash vaqtini kelishadi.");
  });

  document.querySelector("#room-type")?.addEventListener("change", (event) => {
    appState.roomName = event.target.value;
    document.querySelector("#room-caption").textContent = `${appState.roomName} · taxminiy 3D ko‘rinish`;
  });
  pageContent.querySelectorAll("[data-color]").forEach((button) => button.addEventListener("click", () => {
    appState.roomColor = button.dataset.color;
    document.querySelector("#room-ceiling").style.background = `linear-gradient(145deg, ${appState.roomColor}, color-mix(in srgb, ${appState.roomColor} 72%, #555))`;
    pageContent.querySelectorAll("[data-color]").forEach((swatch) => swatch.classList.toggle("selected", swatch === button));
  }));
  document.querySelector("#surface-type")?.addEventListener("change", (event) => {
    document.querySelector("#room-ceiling").style.filter = event.target.value === "mat" ? "saturate(.7) brightness(.93)" : "saturate(1.05) brightness(1.04)";
  });
  pageContent.querySelectorAll("[data-toggle]").forEach((button) => button.addEventListener("click", () => {
    const enabled = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(enabled));
    button.classList.toggle("on", enabled);
    if (button.dataset.toggle === "night") {
      appState.roomNight = enabled;
      document.querySelector("#room-stage").classList.toggle("night", enabled);
      document.querySelector("#room-stage").classList.toggle("day", !enabled);
      document.querySelector("#lighting-caption").textContent = enabled ? "Tungi ko‘rinish" : "Kunduzgi yorug‘lik";
    }
    if (button.dataset.toggle === "spots") {
      appState.spotsOn = enabled;
      document.querySelector("#room-stage").classList.toggle("no-spots", !enabled);
    }
    if (button.dataset.toggle === "led") {
      appState.ledOn = enabled;
      document.querySelector("#room-stage").classList.toggle("no-led", !enabled);
    }
  }));
  document.querySelector("#compare-design")?.addEventListener("click", () => document.querySelector("#compare-panel").classList.remove("hidden"));
  document.querySelector("#hide-compare")?.addEventListener("click", () => document.querySelector("#compare-panel").classList.add("hidden"));
  document.querySelector("#save-project")?.addEventListener("click", () => {
    const project = { room: appState.roomName, color: appState.roomColor, night: appState.roomNight, spots: appState.spotsOn, led: appState.ledOn, savedAt: new Date().toISOString() };
    localStorage.setItem("amu-saved-project", JSON.stringify(project));
    notify("Loyiha ushbu qurilmada saqlandi.");
  });
  document.querySelector("#sim-download")?.addEventListener("click", downloadSimulatorSvg);

  document.querySelector("#room-photo")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return notify("Faqat rasm faylini tanlang.");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      appState.photoData = String(reader.result);
      renderPage();
    });
    reader.readAsDataURL(file);
  });
  document.querySelector("#generate-ai")?.addEventListener("click", () => {
    appState.generated = true;
    renderPage();
    notify("Demo ilhom variantlari ko‘rsatildi; haqiqiy AI generatsiyasi ulanmagan.");
  });

  document.querySelector("#order-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const category = categoryData.find((item) => item.id === data.get("category"));
    const order = {
      id: `AMU-${Date.now().toString().slice(-6)}`,
      name: String(data.get("name")).trim(),
      phone: String(data.get("phone")).trim(),
      categoryName: categoryName(category),
      address: `${String(data.get("district") || "").trim()} ${String(data.get("address") || "").trim()}`.trim(),
      location: appState.orderLocation,
      measurements: appState.roomMeasurements,
      measurementRequested: appState.measurementRequested,
      total: appState.quote.total,
      date: new Date().toLocaleDateString("uz-UZ"),
      status: "Yangi buyurtma"
    };
    appState.orders.unshift(order);
    localStorage.setItem("amu-orders", JSON.stringify(appState.orders));
    appState.measurementRequested = false;
    notify(`Buyurtma ${order.id} demo rejimida qabul qilindi.`);
    setPage("orders");
  });
  document.querySelector("#order-category")?.addEventListener("change", (event) => {
    appState.category = event.target.value;
    appState.selectedDesign = null;
    const input = document.querySelector("#order-design");
    if (input) input.value = "";
  });
  document.querySelector("#edit-measurements")?.addEventListener("click", () => setPage("calculator"));
  document.querySelector("#locate-me")?.addEventListener("click", () => {
    const result = document.querySelector("#location-result");
    if (!navigator.geolocation) {
      result.textContent = "Bu brauzer lokatsiyani qo‘llamaydi.";
      return;
    }
    result.textContent = "Lokatsiya so‘ralmoqda…";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        appState.orderLocation = `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`;
        result.textContent = `Koordinatalar olindi: ${appState.orderLocation} · demo`;
      },
      () => { result.textContent = "Lokatsiyaga ruxsat berilmadi. Manzilni matn bilan kiriting."; },
      { enableHighAccuracy: false, timeout: 8000 }
    );
  });

  document.querySelector("#installment-months")?.addEventListener("change", (event) => {
    appState.installmentMonths = Number(event.target.value);
    renderPage();
  });
  document.querySelectorAll('input[name="payment-plan"]').forEach((radio) => radio.addEventListener("change", () => {
    if (radio.checked) appState.paymentPlan = radio.value;
  }));
  document.querySelector("#backup-consent")?.addEventListener("change", (event) => {
    appState.backupConsent = event.target.checked;
  });
  document.querySelector("#installment-consent")?.addEventListener("change", (event) => {
    appState.installmentConsent = event.target.checked;
  });
  document.querySelector("#chat-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements.message;
    const text = input.value.trim();
    if (!text) return;
    const message = document.createElement("div");
    message.className = "chat-message mine";
    message.textContent = text;
    document.querySelector("#chat-messages").append(message);
    input.value = "";
  });
  document.querySelector("#send-feedback")?.addEventListener("click", () => {
    const input = document.querySelector("#feedback");
    if (!input.value.trim()) return notify("Avval xabaringizni yozing.");
    input.value = "";
    notify("Taklif demo rejimida qabul qilindi; serverga yuborilmadi.");
  });
  document.querySelector("#download-warranty")?.addEventListener("click", downloadWarranty);
  document.querySelectorAll("[data-order-status]").forEach((select) => select.addEventListener("change", () => {
    const order = appState.orders.find((item) => item.id === select.dataset.orderStatus);
    if (!order) return;
    order.status = select.value;
    localStorage.setItem("amu-orders", JSON.stringify(appState.orders));
    renderPage();
    notify(`Buyurtma holati yangilandi: ${order.status}`);
  }));
  document.querySelector("#confirm-payment-plan")?.addEventListener("click", () => {
    const plan = document.querySelector('input[name="payment-plan"]:checked')?.value;
    if (plan === "installment") {
      if (!appState.linkedCards[0] || !appState.linkedCards[1]) return notify("Demo muddatli to‘lovda ikkala karta provayder orqali ulangan bo‘lishi kerak.");
      if (!appState.backupConsent || !appState.installmentConsent) return notify("Muddatli to‘lov shartlari va zaxira karta roziligini belgilang.");
    }
    notify("To‘lov rejasi demo sifatida belgilandi; tranzaksiya amalga oshirilmadi.");
  });
  document.querySelector("#add-worker")?.addEventListener("click", () => notify("Usta qo‘shish formasi backend va admin ruxsati ulangach ishlaydi."));
  document.querySelector("#save-prices")?.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-price]").forEach((input) => {
      appState.prices[input.dataset.adminPrice] = input.value === "" ? null : Number(input.value);
    });
    localStorage.setItem("amu-prices", JSON.stringify(appState.prices));
    notify("Narxlar ushbu brauzerda saqlandi.");
  });
  document.querySelector("#save-region-fees")?.addEventListener("click", () => {
    document.querySelectorAll("[data-region-fee]").forEach((input) => appState.regionFees[input.dataset.regionFee] = Number(input.value) || 0);
    localStorage.setItem("amu-region-fees", JSON.stringify(appState.regionFees));
    notify("Hudud qo‘shimcha xarajatlari saqlandi.");
  });

  if (appState.page === "calculator") calculateQuote();
}

pageContent.addEventListener("click", handlePageClick);
function downloadSimulatorSvg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760"><defs><linearGradient id="c" x2="0" y2="1"><stop stop-color="${appState.roomColor}"/><stop offset="1" stop-color="#878276"/></linearGradient><linearGradient id="w" x2="0" y2="1"><stop stop-color="#32363c"/><stop offset="1" stop-color="#111316"/></linearGradient></defs><rect width="1200" height="760" fill="url(#w)"/><polygon points="180,120 1020,120 1110,330 90,330" fill="url(#c)" stroke="#d7c18e" stroke-width="4"/><polygon points="90,330 1110,330 1070,590 130,590" fill="#777064"/><polygon points="130,590 1070,590 1120,730 80,730" fill="#524b40"/><rect x="480" y="370" width="230" height="190" rx="8" fill="#77828a" stroke="#dacba8" stroke-width="14"/>${appState.spotsOn ? '<circle cx="320" cy="210" r="13" fill="#fff3c9"/><circle cx="880" cy="210" r="13" fill="#fff3c9"/>' : ""}<text x="50" y="65" fill="#e1c68b" font-family="Arial" font-size="28">AMU POTОLOK · ${escapeHtml(appState.roomName)}</text><text x="50" y="105" fill="#ddd" font-family="Arial" font-size="18">Demo xona vizualizatsiyasi — yakuniy material mutaxassis bilan tasdiqlanadi</text></svg>`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  link.download = "amu-potolok-room-preview.svg";
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadWarranty() {
  const order = appState.orders[0];
  const text = [
    "AMU POTОLOK · KAFOLAT MA’LUMOTI · DEMO",
    `Mijoz: ${order?.name || "Buyurtma yuborilganda belgilanadi"}`,
    `Buyurtma raqami: ${order?.id || "—"}`,
    `Shift turi: ${order?.categoryName || "—"}`,
    "Material kafolati: 10 yil",
    "Ish va o‘rnatish kafolati: 1 yil",
    "Eslatma: bu demo hujjat. Rasmiy kafolatni kompaniya tasdiqlashi shart."
  ].join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  link.download = "amu-potolok-kafolat-demo.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

document.querySelector("#main-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) setPage(button.dataset.page);
});
document.querySelector(".mobile-bottom-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) setPage(button.dataset.page);
});
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("#language-select").value = appState.language;
document.querySelector("#language-select").addEventListener("change", (event) => {
  appState.language = event.target.value;
  localStorage.setItem("amu-language", appState.language);
  applyLanguage();
});
document.querySelector("#role-select").value = appState.role;
document.querySelector("#role-select").addEventListener("change", (event) => {
  appState.role = event.target.value;
  localStorage.setItem("amu-role", appState.role);
  document.querySelectorAll(".owner-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "owner"));
  document.querySelectorAll(".worker-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "worker"));
  document.querySelectorAll(".client-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "client"));
  if (["worker", "team", "finance", "admin", "profile"].includes(appState.page)) setPage("home");
  notify("Demo roli almashtirildi. Haqiqiy ruxsatlar backendda tekshirilishi shart.");
});
document.querySelectorAll(".owner-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "owner"));
document.querySelectorAll(".worker-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "worker"));
document.querySelectorAll(".client-only").forEach((element) => element.classList.toggle("hidden", appState.role !== "client"));
document.querySelector("#open-notifications").addEventListener("click", () => setPage("notifications"));
document.querySelector(".dialog-close").addEventListener("click", () => document.querySelector("#preview-dialog").close());
document.querySelector("#preview-order").addEventListener("click", () => {
  if (appState.selectedDesign) {
    appState.category = appState.selectedDesign.categoryId;
    setPage("order");
  }
});
document.querySelector("#preview-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

applyLanguage();
