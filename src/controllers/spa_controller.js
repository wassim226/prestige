import {
  adaptedJson,
  optionalImgValidator,
  requiredImgValidator,
} from "../constantes";
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
      price: z.string().min(1, "This field can not be blank"),
      presentationImg: requiredImgValidator,
    });

    this.updateSchema = z.object({
      id: z.any(),
      title: string().optional(),
      description: string().optional(),
      price: z.any().optional(),
      presentationImg: optionalImgValidator,
    });

    this.createSpa = this.createSpa.bind(this);
    this.updateSpa = this.updateSpa.bind(this);
    this.getElement = this.getElement.bind(this);
    this.getSpas = this.getSpas.bind(this);
  }

  async getElement(id) {
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
    this.path = "spa/";
    let img_id = await BaseController.uploadFile(json["presentationImg"]);

    if (img_id) {
      json["presentationImg"] = img_id;
      let spa = await this.send_request({
        method: "POST",
        body: json,
      });
      if (spa) {
        return SpaModel(
          spa.id,
          spa.title,
          spa.price,
          spa.presentationImg,
          spa.description
        );
      }
    }
  }

  async updateSpa(json) {
    this.path = "spa/" + json.id;
    if (json.presentationImg.length == undefined) {
      let img_id = await BaseController.uploadFile(json.presentationImg);
      if (img_id) {
        json.presentationImg = img_id;
      }
    } else {
      json.presentationImg = -1;
    }

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
