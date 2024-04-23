import { adaptedJson, requiredImgValidator } from "../constantes";
import BaseController from "./base_controller";
import { string, z } from "zod";
import { SpaModel } from "../models";

export default class SpaController extends BaseController {
  static spas = [];

  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "spa";
    this.schema = z.object({
      title: string().min(1, "This field can not be blank"),
      description: string().min(1, "This field can not be blank"),
      price: z.number(),
      presentationImg: requiredImgValidator,
    });

    this.updateSpa = this.updateSpa.bind(this);
    this.getSpa = this.getSpa.bind(this);
    this.getSpas = this.getSpas.bind(this);
  }

  async getSpa(id) {
    this.path = "spa/" + id;
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async getSpas() {
    this.path = "spa/";
    let res = await this.send_request({});
    if (res) {
      this.spas = res;
      return res;
    }
  }

  async createSpa(json) {
    // this.path += "/";
    // let img_id = await BaseController.uploadFile(json["presentationImg"]);
    // this.path = "content";
    // let content_id = await this.send_request({
    //   method: "POST",
    //   body: { content1: json.content },
    // });
    // if (content_id) {
    //   json["presentationImg"] = img_id;
    //   json["content"] = content_id.id;
    //   console.log(json);
    //   this.path = "article";
    //   let articale = await this.send_request({
    //     method: "POST",
    //     body: json,
    //   });
    // }
    // if (articale) {
    //   return ArticaleModel(
    //     articale.id,
    //     articale.title,
    //     articale.extPresentation,
    //     articale.presentationImg,
    //     articale.content,
    //     articale.createdAt,
    //     articale.comments
    //   );
    // }
  }

  async updateSpa(json) {
    this.path = "spa/" + json.id;
    console.log(json);
    json = await adaptedJson(json);
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
