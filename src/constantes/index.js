import { string, z } from "zod";

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const optionalImgValidator = z
  .any()
  .optional()
  .refine((file) => {
    return file.length > 0
      ? ACCEPTED_IMAGE_TYPES.includes(file?.type)
        ? true
        : false
      : true;
  }, "Only .jpg, .jpeg and .png are supported.");

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
  "3D Conception",
  "Aménagement paysagers",
  "Entretien des espaces",
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
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore \
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
