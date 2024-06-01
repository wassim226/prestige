import { string, z } from "zod";
import BaseController from "../controllers/base_controller";
import {
  BlogPageForm,
  ContactPageForm,
  HomePageForm,
  LandscapePageForm,
  SpaPageForm,
  WaterPageForm,
} from "../components";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
export const requiredImgValidator = z.any().refine((file) => {
  return ACCEPTED_IMAGE_TYPES.includes(file?.type);
}, "Only .jpg, .jpeg and .png are supported.");
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

export const getPage = (id, controller) => {
  let page = null;
  switch (id) {
    case "Home":
      page = HomePageForm;
      controller.updateSchema = z.object({
        name: string(),
        extPresentation: string().optional(),
        presentationImg: optionalImgValidator,
        value_1: string().optional(),
        desc_1: string().optional(),
        value_2: string().optional(),
        desc_2: string().optional(),
        value_3: string().optional(),
        desc_3: string().optional(),
        value_4: string().optional(),
        desc_4: string().optional(),
      });
      break;
    case "Landscape":
    case "Pool":
      LandscapePageForm.defaultProps = { isPool: id == "Pool" };
      page = LandscapePageForm;
      controller.updateSchema = z.object({
        name:
          id == "Pool"
            ? string().min(1, "This field can not be blank")
            : z.object({
                name: string(),
                label: string().min(1, "This field can not be blank"),
              }),
        title: string().min(1, "This field can not be blank"),
        extPresentation: string().min(1, "This field can not be blank"),
        presentationImg: optionalImgValidator,
        bodyTitle: string().min(1, "This field can not be blank"),
        bodyPresentation: string().min(1, "This field can not be blank"),
        bodyImg: optionalImgValidator,
        service_1: string().min(1, "This field can not be blank"),
        service_2: string().min(1, "This field can not be blank"),
        service_3: string().min(1, "This field can not be blank"),
        service_4: string().min(1, "This field can not be blank"),
      });
      break;
    case "Spa":
      page = SpaPageForm;
      controller.updateSchema = z.object({
        name: string().min(1, "This field can not be blank"),
        title: string().min(1, "This field can not be blank"),
        extPresentation: string().min(1, "This field can not be blank"),
        presentationImg: optionalImgValidator,
      });
      break;
    case "Water":
      page = WaterPageForm;
      controller.updateSchema = z.object({
        name: string().min(1, "This field can not be blank"),
        title: string().min(1, "This field can not be blank"),
        extPresentation: string().min(1, "This field can not be blank"),
        presentationImg: optionalImgValidator,
        bodyTitle: string().min(1, "This field can not be blank"),
        bodyPresentation: string().min(1, "This field can not be blank"),
        bodyImg: optionalImgValidator,
        offer_1: string().min(1, "This field can not be blank"),
        offer_2: string().min(1, "This field can not be blank"),
        offer_3: string().min(1, "This field can not be blank"),
        offer_4: string().min(1, "This field can not be blank"),
        offer_5: string().min(1, "This field can not be blank"),
        offerDesc_2: string().min(1, "This field can not be blank"),
        offerDesc_3: string().min(1, "This field can not be blank"),
        offerDesc_4: string().min(1, "This field can not be blank"),
        offerDesc_1: string().min(1, "This field can not be blank"),
        offerDesc_5: string().min(1, "This field can not be blank"),
      });
      break;
    case "Blog":
      page = BlogPageForm;
      controller.updateSchema = z.object({
        name: string().min(1, "This field can not be blank"),
        title: string().min(1, "This field can not be blank"),
        extPresentation: string().min(1, "This field can not be blank"),
        presentationImg: optionalImgValidator,
      });
      break;
    case "Contact":
      page = ContactPageForm;
      controller.updateSchema = z.object({
        phone: string().min(1, "This field can not be blank"),
        adress: string().min(1, "This field can not be blank"),
        email: string().min(1, "This field can not be blank"),
        // password: string().min(1, "This field can not be blank"),
      });
      break;
  }
  return page;
};

export async function adaptedJson(json) {
  let imgs = ["presentationImg", "bodyImg"];

  switch (json.name) {
    case "home":
      if (json.presentationImg.length == undefined) {
        let img_id = await BaseController.uploadFile(json.presentationImg);
        if (img_id) {
          json.presentationImg = img_id;
        }
      } else {
        json.presentationImg = -1;
      }

      json = {
        head: JSON.stringify({
          presentationImg: json.presentationImg,
          extPresentation: json.extPresentation,
        }),
        sequance1: JSON.stringify({
          value_1: json.value_1,
          desc_1: json.desc_1,
          value_2: json.value_2,
          desc_2: json.desc_2,
          value_3: json.value_3,
          desc_3: json.desc_3,
          value_4: json.value_4,
          desc_4: json.desc_4,
        }),
      };
      break;
    case "conception":
    case "amenagement":
    case "entretien":
    case "pool":
      await Promise.all(
        imgs.map(async (img) => {
          if (json[img].length == undefined) {
            let img_id = await BaseController.uploadFile(json[img]);
            console.log(img_id);
            if (img_id) {
              json[img] = img_id;
            }
          } else {
            json[img] = -1;
          }
        })
      );

      json = {
        head: JSON.stringify({
          title: json.title,
          presentationImg: json.presentationImg,
          extPresentation: json.extPresentation,
        }),
        sequance1: JSON.stringify({
          bodyTitle: json.bodyTitle,
          bodyPresentation: json.bodyPresentation,
          bodyImg: json.bodyImg,
        }),
        sequance2: JSON.stringify({
          service_1: json.service_1,
          service_2: json.service_2,
          service_3: json.service_3,
          service_4: json.service_4,
        }),
      };
      break;
    case "spa":
      if (json.presentationImg.length == undefined) {
        let img_id = await BaseController.uploadFile(json.presentationImg);
        if (img_id) {
          json.presentationImg = img_id;
        }
      } else {
        json.presentationImg = -1;
      }

      json = {
        head: JSON.stringify({
          title: json.title,
          presentationImg: json.presentationImg,
          extPresentation: json.extPresentation,
        }),
      };
      break;
    case "water":
      await Promise.all(
        imgs.map(async (img) => {
          if (json[img].length == undefined) {
            let img_id = await BaseController.uploadFile(json[img]);
            if (img_id) {
              json[img] = img_id;
            }
          } else {
            json[img] = -1;
          }
        })
      );

      json = {
        head: JSON.stringify({
          title: json.title,
          presentationImg: json.presentationImg,
          extPresentation: json.extPresentation,
        }),
        sequance1: JSON.stringify({
          bodyTitle: json.bodyTitle,
          bodyPresentation: json.bodyPresentation,
          bodyImg: json.bodyImg,
        }),
        sequance2: JSON.stringify({
          offer_1: json.offer_1,
          offer_2: json.offer_2,
          offer_3: json.offer_3,
          offer_4: json.offer_4,
          offer_5: json.offer_5,
          offerDesc_2: json.offerDesc_2,
          offerDesc_3: json.offerDesc_3,
          offerDesc_4: json.offerDesc_4,
          offerDesc_1: json.offerDesc_1,
          offerDesc_5: json.offerDesc_5,
        }),
      };
      break;
    case "blog":
      if (json.presentationImg.length == undefined) {
        let img_id = await BaseController.uploadFile(json.presentationImg);
        if (img_id) {
          json.presentationImg = img_id;
        }
      } else {
        json.presentationImg = -1;
      }

      json = {
        head: JSON.stringify({
          title: json.title,
          presentationImg: json.presentationImg,
          extPresentation: json.extPresentation,
        }),
      };
      break;
    // case "contact":
    //   page = ContactPageForm;
    //   break;
  }

  return json;
}

export const getParsedData = (json) => {
  console.log(json);
  json = {
    ...JSON.parse(json.head),
    ...JSON.parse(json.sequance1),
    ...JSON.parse(json.sequance2),
    ...JSON.parse(json.sequance3),
    ...JSON.parse(json.sequance4),
    ...JSON.parse(json.sequance5),
    ...JSON.parse(json.sequance6),
  };
  console.log(json);

  return json;
};

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
