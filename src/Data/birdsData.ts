const birdsData = [
  [
    {
      id: 1,
      name: "Ворон",
      species: "Corvus corax",
      description:
        "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
      image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
    },
    {
      id: 2,
      name: "Журавль",
      species: "Grus grus",
      description:
        "Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",
      image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"
    },
    {
      id: 3,
      name: "Ласточка",
      species: "Delichon urbicum",
      description:
        "Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",
      image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"
    },
    {
      id: 4,
      name: "Козодой",
      species: "Caprimulgus europaeus",
      description:
        "Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ",
      image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"
    },
    {
      id: 5,
      name: "Кукушка",
      species: "Cuculus canorus",
      description:
        "Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",
      image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"
    },
    {
      id: 6,
      name: "Синица",
      species: "Parus major",
      description:
        "В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",
      image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Воробей",
      species: "Passer domesticus",
      description:
        "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
      image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"
    },
    {
      id: 2,
      name: "Грач",
      species: "Corvus frugilegus",
      description:
        "Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",
      image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"
    },
    {
      id: 3,
      name: "Галка",
      species: "Coloeus monedula",
      description:
        "Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",
      image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"
    },
    {
      id: 4,
      name: "Певчий дрозд",
      species: "Turdus philomelos",
      description:
        "Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",
      image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"
    },
    {
      id: 5,
      name: "Сорока",
      species: "Pica pica",
      description:
        "Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",
      image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"
    },
    {
      id: 6,
      name: "Сойка",
      species: "Garrulus glandarius",
      description:
        "Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",
      image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Зяблик",
      species: "Fringilla coelebs",
      description:
        "В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",
      image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"
    },
    {
      id: 2,
      name: "Клёст",
      species: "Loxia curvirostra",
      description:
        "Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",
      image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"
    },
    {
      id: 3,
      name: "Горлица",
      species: "Streptopelia turtur",
      description:
        "Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",
      image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"
    },
    {
      id: 4,
      name: "Дятел",
      species: "Dendrocopos major",
      description:
        "Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",
      image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"
    },
    {
      id: 5,
      name: "Удод",
      species: "Upupa epops",
      description:
        "Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",
      image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"
    },
    {
      id: 6,
      name: "Стриж",
      species: "Apus apus",
      description:
        "Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",
      image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Жаворонок",
      species: "Alauda arvensis",
      description:
        "Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"
    },
    {
      id: 2,
      name: "Соловей",
      species: "Luscinia luscinia",
      description:
        "Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",
      image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"
    },
    {
      id: 3,
      name: "Скворец",
      species: "Sturnus vulgaris",
      description:
        "Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"
    },
    {
      id: 4,
      name: "Иволга",
      species: "Oriolus oriolus",
      description:
        "Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",
      image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"
    },
    {
      id: 5,
      name: "Свиристель",
      species: "Bombycilla garrulus",
      description:
        "У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"
    },
    {
      id: 6,
      name: "Щегол",
      species: "Carduelis carduelis",
      description:
        "Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",
      image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Орёл",
      species: "Aquila nipalensis",
      description:
        "В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",
      image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"
    },
    {
      id: 2,
      name: "Коршун",
      species: "Milvus migrans",
      description:
        "Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",
      image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"
    },
    {
      id: 3,
      name: "Лунь",
      species: "Circus cyaneus",
      description:
        "Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",
      image: "https://www.ebirds.ru/images/e/74.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"
    },
    {
      id: 4,
      name: "Сокол",
      species: "Falco peregrinus",
      description:
        "Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",
      image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"
    },
    {
      id: 5,
      name: "Ястреб",
      species: "Accipiter gentilis",
      description:
        "Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",
      image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"
    },
    {
      id: 6,
      name: "Филин",
      species: "Bubo bubo",
      description:
        "Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",
      image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Альбатрос",
      species: "Diomedea exulans",
      description:
        "Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",
      image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"
    },
    {
      id: 2,
      name: "Олуша",
      species: "Sula nebouxii",
      description:
        "Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",
      image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"
    },
    {
      id: 3,
      name: "Буревестник",
      species: "Puffinus griseus",
      description:
        "Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",
      image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"
    },
    {
      id: 4,
      name: "Пеликан",
      species: "Pelecanus",
      description:
        "Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",
      image:
        "data:image/jpeg;base64,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",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"
    },
    {
      id: 5,
      name: "Пингвин",
      species: "Aptenodytes forsteri",
      description:
        "Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",
      image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"
    },
    {
      id: 6,
      name: "Чайка",
      species: "Larus argentatus",
      description:
        "Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",
      image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"
    }
  ]
];

export default birdsData;
