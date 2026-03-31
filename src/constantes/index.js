import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import {
  AmenageArt,
  AmenagePresentation,
  ConceptionArt,
  ConceptionPresentation,
  DirtyWater,
  DirtyWater1,
  EntretienArt,
  EntretienPresentation,
  PoolArt,
  PoolPresentation,
  PureWater,
  PureWater1,
  SpaArt,
  SpaPresentation,
  WatterArt,
  WatterPresentation,
} from "../assets/index.js";

export const navList = [
  "Accueil",
  "Paysage",
  "Piscine",
  "Spa",
  "L'eau",
  "Contact",
];
export const landscape = [
  { name: "conception", label: "3D Conception" },
  { name: "amenagement", label: "Aménagement paysagers" },
  { name: "entretien", label: "Entretien des espaces" },
];

export const notifications = [
  { id: 1, title: "Remy Sharp", desc: "Team Leader", date: "01-02-2024 14:06" },
  {
    id: 2,
    title: "Kheloufi Abdelhamid",
    desc: " body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    date: "01-02-2024 14:06",
  },
  {
    id: 3,
    title: "Bencheli Abderrahmene",
    desc: "Team Leader",
    date: "01-02-2024 14:06",
  },
];

export const default_description =
  "Chez Prestige Piscine Paysage, nous concevons, aménageons et entretenons vos espaces extérieurs avec passion et expertise. De la création paysagère à l’entretien de piscines et spas, nous vous proposons des solutions sur mesure pour un cadre de vie harmonieux, esthétique et durable.";

export const addedValues = [
  {
    title: "Accompagnement",
    body: "Accompagnement personnalisé de A à Z",
  },
  {
    title: "Expertise",
    body: "Expertise professionnelle et savoir-faire reconnu",
  },
  {
    title: "Qualité",
    body: "Matériaux et produits de haute qualité",
  },
  {
    title: "Efficacité",
    body: "Intervention rapide avec suivi régulier",
  },
];

export const landScapeData = {
  conception: {
    artSequences: [
      {
        imgPresentation: ConceptionPresentation,
        title: "Conception paysagère",
        extPresentation:
          "Nous imaginons et concevons des projets paysagers uniques adaptés à vos envies et à votre environnement. Chaque projet est étudié avec précision pour créer un espace harmonieux et durable.",
      },
      {
        imgPresentation: ConceptionArt,
        title: "Visualiser l'Avenir de votre Jardin",
        extPresentation:
          "La conception paysagère 3D est devenue un outil indispensable pour transformer une vision en réalité concrète. Contrairement aux plans traditionnels sur papier, la modélisation 3D permet une immersion totale dans le futur aménagement, offrant une clarté absolue sur chaque détail architectural et végétal.",
      },
    ],
    sequences: [],
  },
  amenagement: {
    artSequences: [
      {
        imgPresentation: AmenagePresentation,
        title: "Aménagement paysager",
        extPresentation:
          "Nous réalisons l’aménagement complet de vos espaces extérieurs : plantations, création de jardins, installation de pelouses, terrasses et éléments décoratifs pour sublimer votre cadre de vie.",
      },
      {
        imgPresentation: AmenageArt,
        title: "Créer un Équilibre Durable",
        extPresentation:
          "L'aménagement paysager ne se limite pas à la plantation de fleurs ; c'est l'art de façonner des espaces vivants qui équilibrent esthétique, usage et respect de l'environnement. Pour réussir son projet, il est essentiel de respecter certaines règles d'or, comme l'équilibre des formes et le choix de plantes adaptées au climat local.",
      },
    ],
    sequences: [
      {
        description:
          "les aménagements écologiques, tels que les jardins de pluie ou les terrasses végétalisées.",
      },
      {
        description: "Des chemins de circulation intuitifs",
      },
      {
        description:
          "Les systèmes d'éclairage pour valoriser l'espace la nuit.",
      },
    ],
  },
  entretien: {
    artSequences: [
      {
        imgPresentation: EntretienPresentation,
        title: "Entretien d’espaces verts",
        extPresentation:
          "Nous assurons l’entretien régulier ou ponctuel de vos espaces verts : tonte, taille, désherbage et soin des plantations pour garantir un jardin toujours propre et en bonne santé.",
      },
      {
        imgPresentation: EntretienArt,
        title: "Pérenniser la Beauté Naturelle",
        extPresentation:
          "Un bel aménagement nécessite un entretien régulier pour rester sain et esthétique au fil des années. L'entretien doit s'adapter aux cycles saisonniers, avec des interventions spécifiques pour chaque période de l'année.",
      },
    ],
    sequences: [],
  },
};

export const poolData = {
  artSequences: [
    {
      imgPresentation: PoolPresentation,
      title: "Piscine",
      extPresentation: "Des piscines toujours propres et prêtes à l’usage",
    },
    {
      imgPresentation: PoolArt,
      title: "Service",
      extPresentation:
        "Nous proposons des services complets pour l’entretien de votre piscine : nettoyage, traitement de l’eau, contrôle des équipements et interventions techniques. Profitez d’une eau claire et saine toute l’année sans contrainte.",
    },
  ],
  sequences: [],
};

export const spaData = {
  artSequences: [
    {
      imgPresentation: SpaArt,
      title: "Spa boutique",
      extPresentation: "Détente et bien-être en toute sérénité",
    },
  ],
  products: [
    {
      presentationImg: SpaPresentation,
      title: "Spa title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 3000,
    },
  ],
};
export const waterData = {
  artSequences: [
    {
      imgPresentation: WatterPresentation,
      title: "Maîtrise et qualité de l’eau",
      extPresentation:
        "Nous analysons et traitons l’eau de vos installations pour garantir un équilibre parfait. Grâce à notre expertise, nous vous assurons une eau saine, claire et respectueuse de votre santé et de l’environnement.",
    },
    {
      imgPresentation: WatterArt,
      title: "Garantir une Baignade Saine",
      extPresentation:
        "Pour profiter d'une piscine cristalline et sécurisée, un équilibre chimique rigoureux est indispensable. L'eau est un milieu vivant qui réagit constamment à la température, à la fréquentation et aux débris extérieurs, nécessitant une surveillance régulière.",
    },
  ],
  sequences: [],
};

export const contactData = {
  phone: "+2130000 00 00 00",
  address: "Demo address",
};

export const interventions = [
  { dirty: DirtyWater, clean: PureWater },
  { dirty: DirtyWater1, clean: PureWater1 },
];

export const handelResize = (setCols) => {
  const fullConfig = resolveConfig(tailwindConfig);
  setCols(() => {
    if (
      window.innerWidth >= Number(fullConfig.theme.screens.md.replace("px", ""))
    ) {
      return 4;
    } else if (
      window.innerWidth >= Number(fullConfig.theme.screens.sm.replace("px", ""))
    ) {
      return 3;
    } else if (
      window.innerWidth >= Number(fullConfig.theme.screens.ss.replace("px", ""))
    ) {
      return 2;
    } else {
      return 1;
    }
  });
};
