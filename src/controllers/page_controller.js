import { ArticaleModel } from "../models";
import BaseController from "./base_controller";

export default class PageController extends BaseController {
  static pages = [];

  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "pages";
    this.schema_ = null;

    this.updatePage = this.updatePage.bind(this);
    this.getPage = this.getPage.bind(this);
    this.getPagesNames = this.getPagesNames.bind(this);

    // this.schema = z.object({
    //   title: string().min(1, "This field can not be blank"),
    //   extPresentation: string().min(1, "This field can not be blank"),
    //   presentationImg: z.any().refine((file) => {
    //     return ACCEPTED_IMAGE_TYPES.includes(file?.type);
    //   }, "Only .jpg, .jpeg and .png are supported."),
    //   content: string().min(1, "This field can not be blank"),
    // });
  }

  get schema() {
    return this.schema_;
  }

  set schema(sch) {
    this.schema_ = sch;
  }

  async getPage(name) {
    this.path += "/" + name;
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async getPagesNames() {
    this.path += "/names";
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async updatePage(json) {
    this.path += "/" + json.name;
    console.log(json);

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
    console.log(json);

    let res = await this.send_request({
      method: "PUT",
      body: json,
    });

    if (res) {
      return true;
    }
    return false;
  }
}
