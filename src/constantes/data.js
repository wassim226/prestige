import {
  PureWater,
  PureWater1,
  SpaImage,
  SpaImage2,
  SpaImage3,
  image,
  image1,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../assets";

export const default_description =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore \
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const navList = [
  "Home",
  "Landscape",
  "Pool",
  "Spa",
  "Water",
  "Blog",
  "Contact",
];

export const landscape = [
  { name: "conception", label: "3D Conception" },
  { name: "amenagement", label: "Aménagement paysagers" },
  { name: "entretien", label: "Entretien des espaces" },
];

export const addedValues = [
  {
    title: "A value",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "A value",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "A value",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "A value",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const spas = [
  {
    presentationImg: SpaImage3,
    title: "SPA MALAGA 3 PLACES",
    price: 6500,
    details: [
      "Dimensions : 2100 x 1700 x 900mm",
      "51 Jets thérapie",
      "Système électronique BALBOA",
      "Pompes LX Whirlpool 2 x 1500w",
      "Acrylique Aristech",
      "Luminothérapie",
      "Système audio Bluetooth",
      "Triple isolation",
      "Design unique, finitions alu leds",
    ],
  },
  {
    presentationImg: SpaImage,
    title: "SPA NEVADA 2 PLACES",
    price: 8000,
    details: [
      "Dimensions : 2100 x 1700 x 900mm",
      "51 Jets thérapie",
      "Système électronique BALBOA",
      "Pompes LX Whirlpool 2 x 1500w",
      "Acrylique Aristech",
      "Luminothérapie",
      "Système audio Bluetooth",
      "Triple isolation",
      "Design unique, finitions alu leds",
    ],
  },
];

export const landscapeData = {
  conception: {
    background: image,
    title: "3D Conception",
    description: default_description,
    sections: [
      {
        image: image5,
        title: "Bienvenue dans le magazine de la piscine",
        description: default_description,
        services: [
          "Forme libre",
          "Couloir de nage",
          "Plage immergée",
          "Filtration écologique",
        ],
      },
    ],
  },
  amenagement: {
    background: image6,
    backImagePos: "md:top-[-40vh]",
    title: "Aménagement paysagers",
    description: default_description,
    sections: [
      {
        image: image7,
        title: "Bienvenue dans le magazine de la piscine",
        description: default_description,
        services: [
          "Forme libre",
          "Couloir de nage",
          "Plage immergée",
          "Filtration écologique",
        ],
      },
    ],
  },
  entretien: {
    background: image4,
    title: "Entretien des espaces",
    description: default_description,
    sections: [
      {
        image: image8,
        title: "Bienvenue dans le magazine de la piscine",
        description: default_description,
        services: [
          "Forme libre",
          "Couloir de nage",
          "Plage immergée",
          "Filtration écologique",
        ],
      },
    ],
  },
};
