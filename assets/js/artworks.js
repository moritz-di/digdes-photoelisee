console.log('artworks.js -> ready')

// ============================================
//             ARTWORKS / DATABASE
// ============================================


// all artworks
const artwork =[
  {
    credits: 'Elisa Lavergo, Projet "In the field", 2014 — ©Elisa Lavergo',
    image: 'MEL_LARVEGO_050475.jpg',
    models: [
      'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/', // bag
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/', // glasses
      'https://my.spline.design/balls-67798941912082a842263cc552478249/', // balls
      'https://my.spline.design/can-58e135246fe284932f2c65c1a7d3187b/', // can
      'https://my.spline.design/migros-303ff83e74bfbe4c50e09996106b8e2c/', // logo migros
    ],
    // top, left, size
    target: [
      [[45, 2, 60]], // bag
      [[55, 38, 50]], // glasses
      [[64, 25, 40]], // balls
      [[78, 78, 50]], // can
      [
        [69, 62, 40],
        [58, 2, 40]
      ], // logo migros
    ],
    text: [
      'Try to find the bag in the image',
      'What about this one?',
      'Nice, how about these balls? ;)',
      'Try to find the can in the image',
      'Try to find the migros logo in the image',
    ]
  },
  {
    credits: "Friedrich Buehler-Rist, Boule de Noel, 1930 — ©Musée de l'Elysée",
    image: 'MEL_BUEHLER_RIST_Friedrich_001397.jpg',
    models: [
      'https://my.spline.design/christmas-370fd687501d79686a91c7c3b1f73c5a/', // christmas bulb
      'https://my.spline.design/camera-a6fd2f5c1bdbc7d20cf0e10a463f3933/', // camera
      'https://my.spline.design/frame-055c8af1ce838abadfccf2cbc4b0285a/', // frame
      'https://my.spline.design/roses-b92525481d5ecf7eb3706fc2c6dccf43/', // roses
    ],
    // top, left, size
    target: [
      [[27, 5, 400]], // bulb
      [[53, 38, 50]], // camera
      [
        [50, 25, 50],
        [50, 51, 50]
      ], // frame
      [[55, 47, 50]], // roses
    ],
    text: [
      'Try to find the bulb in the image',
      'Try to find the camera in the image',
      'Try to find the frame in the image',
      'Try to find the roses in the image',
    ]
  },
  {
    credits: "Philippe Herbert, Suites Moldaves, 2011 — ©Philippe Herbert",
    image: 'MEL_HERBET_Philippe_052814_24.jpg',
    models: [
      'https://my.spline.design/bag-1d2248d0847cb671bfff280da9f3a851/', // bag
      'https://my.spline.design/phone-4c13d06b43f0c995edcf4515cd35155e/', // phone
    ],
    // top, left, size
    target: [
      [
        [77, 83, 30],
        [46, 57, 30]
      ], // bag
      [[47, 53, 30]], // phone
    ],
    text: [
      'Try to find the bag in the image',
      'Try to find the phone in the image',
    ]
  },
  {
    credits: "Tehila Cohen, Sans titre, 2008 — ©Tehila Cohen",
    image: 'cohen_22.jpg',
    models: [
      'https://my.spline.design/towels-d2cdf486d160ffcb8b7f860938ce1187/', // towel
    ],
    // top, left, size
    target: [
      [[90, 19, 350]], // towel
    ],
    text: [
      'Try to find the towel in the image',
    ]
  },
  {
    credits: "Lawick Muller, Audioguide , 2010 — ©Lawic Muller",
    image: 'MEL_LAWICK_Friederike_Van_MULLER_Hans_054766.jpg',
    models: [
      'https://my.spline.design/garbagebin-a1c05760a2e06a6c44123f040e005831/', // garbagebin
      'https://my.spline.design/cigarette-7c90dc1a19530eb31230a00e5988fb31/', // cigarette
      'https://my.spline.design/chain-e1025d944ac98aaf5364de6880abe3ca/', // chain
      'https://my.spline.design/umbrella-9606534601ee77e178d8f35cb8e9816d/', // umbrella
    ],
    // top, left, size
    target: [
      [[23, 0, 50]], // garbagebin
      [
        [37, 1, 50],
        [65, 5, 50]
      ], // cigarette
      [[57, 75, 50]], // chain
      [[19, 91, 50]], // umbrella
    ],
    text: [
      'Try to find the garbage bin in the image',
      'Try to find the cigarette in the image',
      'Try to find the chain in the image',
      'Try to find the umbrella in the image',
    ]
  },
  {
    credits: "Eva Leitolf, Place des Martyres, Beirut , 1994-1995 — ©Eva Leitolf",
    image: 'MEL_LEITOLF_Eva_058091.jpg',
    models: [
      'https://my.spline.design/palm-f2073632d3a764e6aa3fa466335fa5a0/', // palm
      'https://my.spline.design/bench-3a8e2e86a064f2c2a2d87bfd5991664f/', // bench
    ],
    // top, left, size
    target: [
      [
        [33, 60, 50],
        [32, 70, 50],
        [32, 82, 50]
      ], // palm
      [
        [51, 49, 50],
        [55, 44, 50],
        [58, 40, 50]
      ], // bench
    ],
    text: [
      'Try to find the palm in the image',
      'Try to find the bench in the image',
    ]
  },
  {
    credits: "Paolo Woods, State 30 Radio , 2012 — ©Paolo Woods",
    image: 'MEL_WOODS_Paolo_050857.jpg',
    models: [
      'https://my.spline.design/clock-8efb856751d08e4c8788d9837ba775fe/', // clock
      'https://my.spline.design/knife-c7738073c0309ac75f6e585cc6915445/', // knife
    ],
    // top, left, size
    target: [
      [
        [62, 19, 50],
        [65, 22, 50]
      ], // clock
      [
        [13, 22, 50],
        [13, 26, 50],
        [13, 38, 50],
        [13, 47, 50],
        [13, 61, 50],
        [13, 66, 50],
      ], // knife
    ],
    text: [
      'Try to find the clock in the image',
      'Try to find the knife in the image',
    ]
  },
  {
    credits: "Julia Fullerton-Batten, Cutting hair , 2007 — ©Julia Fullerton-Batten",
    image: 'FULLERTON-BATTEN_ME_041525.jpg',
    models: [
      'https://my.spline.design/scissors-d84859144a34d8eb12ee8777cc7dd7d6/', // scissors
      'https://my.spline.design/a-67e24037337f74ea4bf415a00c0b2c37/', // letter
    ],
    // top, left, size
    target: [
      [
        [43, 26, 50],
        [43, 39, 50]
      ], // scissors
      [
        [5, 30, 50],
        [11, 44, 50]
      ], // letter
    ],
    text: [
      'Try to find the scissors in the image',
      'Try to find the letter "A" in the image',
    ]
  },
  {
    credits: "Krieg-in-Albon, Course de trotinette à Lausanne, 1919 — ©Musée de l'Elysée",
    image: 'MEL_KRIEG_IN_Albon_049746.jpg',
    models: [
      'https://my.spline.design/schlaufe-eb5645b85e48235e7cb627be6e7beeac/', // hairband
    ],
    // top, left, size
    target: [
      [
        [43, 53, 50],
        [40, 74, 50],
        [35, 90, 50],
        [37, 4, 50],
      ], // hairband
    ],
    text: [
      'Try to find the hairband in the image',
    ]
  },
  {
    credits: "Olivier Charles, Sans titre, 1980 — ©Musée de l'Elysée",
    image: 'MEL_CHARLES_Olivier_059293.jpg',
    models: [
      'https://my.spline.design/glass-232c44afc8769d40e026660d2754cdf4/', // glass
    ],
    // top, left, size
    target: [
      [[54, 12, 80]], // glass
    ],
    text: [
      'Try to find the glass in the image',
    ]
  },
  {
    credits: "Bruna Biamino, Lo Studio di Leonardo, 1989 — ©Bruna Biamino Fotografo",
    image: 'MEL_BIAMINO_Bruna_056133.jpg',
    models: [
      'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/', // sunglasses
    ],
    // top, left, size
    target: [
      [[85, 20, 50]], // sunglasses
    ],
    text: [
      'Try to find the sunglasses in the image',
    ]
  },
  {
    credits: "Gaston de Jongh, Photomontage pour une affiche publicitaire, 1940 — ©Musée de l'Elysée",
    image: 'MEL_DE_JONGH_Gaston_050041.jpg',
    models: [
      'https://my.spline.design/button-94e3191a4661e33b250159736fee98fc/', // button
    ],
    // top, left, size
    target: [
      [
        [84, 14, 50],
        [81, 37, 50]
      ], // button
    ],
    text: [
      'Try to find the button in the image',
    ]
  },
  {
    credits: "Chastellain & Gross, Sans Titre, 1897-1898 — ©Domaine Public",
    image: 'MEL_CHASTELLAIN_et_GROSS_058590.jpg',
    models: [
      'https://my.spline.design/bottle-b90b36c246a768408baae3a384377c03/', // bottle
    ],
    // top, left, size
    target: [
      [[62, 20, 50]], // button
    ],
    text: [
      'Try to find the bottle in the image',
    ]
  },
  {
    credits: "Monique Jacot, Manifestation de Femmes, Berne, Bundesplatz, 3 mars 1993 , 1993 — ©Monique Jacot / Musée de l'Elysée Lausanne et Fondation Suisse pour la photographie, Winterthur",
    image: 'MEL_JACOT_Monique_029097.jpg',
    models: [
      'https://my.spline.design/palm-f2073632d3a764e6aa3fa466335fa5a0/', // palm
      'https://my.spline.design/ring-51bff80076847d4e153cd5f432d3653e/', // ring
    ],
    // top, left, size
    target: [
      [[50, 45, 50]], // palm
      [[79, 43, 50]] // ring
    ],
    text: [
      'Try to find the palm in the image',
      'Try to find the ring in the image',
    ]
  },
  {
    credits: "Elina Brotherus, Artist and model reflected in a mirror 3 , 2007 — ©Elina Brotherus",
    image: 'MEL_BROTHERUS_Elina_054328.jpg',
    models: [
      'https://my.spline.design/heating-bc8b58feb1ce5f7d0793795d708c7bf1/', // heating
    ],
    // top, left, size
    target: [
      [[30, 79, 500]], // heating
    ],
    text: [
      'Try to find the heating in the image',
    ]
  },
];


// ============================================
//         SUCCESS / MODEL - DATABASE
// ============================================


const allModels = [
  [
    'https://my.spline.design/backpack-fc152d6dfc940bd47a51d592725b9f04/', // bag
    0
  ],
  [
    'https://my.spline.design/christmas-370fd687501d79686a91c7c3b1f73c5a/', // christmas bulb
    1
  ],
  [
    'https://my.spline.design/bag-1d2248d0847cb671bfff280da9f3a851/', // bag
    2
  ],
  [
    'https://my.spline.design/towels-d2cdf486d160ffcb8b7f860938ce1187/', // towel
    3
  ],
  [
    'https://my.spline.design/garbagebin-a1c05760a2e06a6c44123f040e005831/', // garbagebin
    4
  ],
  [
    'https://my.spline.design/palm-f2073632d3a764e6aa3fa466335fa5a0/', // palm
    5
  ],
  [
    'https://my.spline.design/clock-8efb856751d08e4c8788d9837ba775fe/', // clock
    6
  ],  
  [
    'https://my.spline.design/scissors-d84859144a34d8eb12ee8777cc7dd7d6/', // scissors
    7
  ],  
  [
    'https://my.spline.design/schlaufe-eb5645b85e48235e7cb627be6e7beeac/', // hairband
    8
  ],  
  [
    'https://my.spline.design/glass-232c44afc8769d40e026660d2754cdf4/', // glass
    9
  ],  
  [
    'https://my.spline.design/sunglasses-571e48d8ce3089b0ebe7d54f16176541/', // sunglasses
    10
  ],
  [
    'https://my.spline.design/button-94e3191a4661e33b250159736fee98fc/', // button
    11
  ],
  [
    'https://my.spline.design/bottle-b90b36c246a768408baae3a384377c03/', // bottle
    12
  ],
  [
    'https://my.spline.design/heating-bc8b58feb1ce5f7d0793795d708c7bf1/', // heating
    14
  ],
]


// ============================================
//        SUCCESS / LOADING THE OBJECTS
// ============================================


function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

Shuffle(allModels);
console.log(allModels[0]);

$('.success iframe').each(function(){
  var i = $(this).parents('div').attr('array-id')
    $(this).attr('src', allModels[i][0])
    thisId = allModels[i][1]
    $(this).parents('div').attr('data-id', thisId)
});
