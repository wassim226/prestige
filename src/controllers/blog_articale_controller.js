import { optionalImgValidator, requiredImgValidator } from "../constantes";
import { ArticaleModel } from "../models";
import BaseController from "./base_controller";
import { string, z } from "zod";

export default class BlogArticaleController extends BaseController {
  static BlogArticales = [];

  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "article";

    this.schema = z.object({
      title: string().min(1, "This field can not be blank"),
      extPresentation: string().min(1, "This field can not be blank"),
      presentationImg: requiredImgValidator,
      content: string().min(1, "This field can not be blank"),
    });

    this.updateSchema = z.object({
      id: z.any(),
      title: string().optional(),
      extPresentation: string().optional(),
      presentationImg: optionalImgValidator,
      content: string().optional(),
    });

    this.createBlogArticale = this.createBlogArticale.bind(this);
    this.getElement = this.getElement.bind(this);
    this.updateBlogArticale = this.updateBlogArticale.bind(this);
  }

  async getBlogArticales() {
    let temp_BlogArticale = [];
    this.path = "article";
    let res = await this.send_request({});
    if (res) {
      res.map((articale, ind) => {
        temp_BlogArticale.push(
          ArticaleModel(
            articale.id,
            articale.title,
            articale.extPresentation,
            articale.presentationImg,
            articale.content,
            articale.createdAt.split("T")[0],
            articale.comments
          )
        );
      });
      BlogArticaleController.BlogArticales = temp_BlogArticale;
    }
    return temp_BlogArticale;
  }

  async getElement(id) {
    this.path = `article/${id}`;
    let articale = await this.send_request({ query_paramaters: "" });
    if (articale) {
      return articale;
    }
  }

  async createBlogArticale(json) {
    let img_id = await BaseController.uploadFile(json["presentationImg"]);
    this.path = "content";
    let content_id = await this.send_request({
      method: "POST",
      body: { content1: json.content },
    });
    if (content_id) {
      json["presentationImg"] = img_id;
      json["content"] = content_id.id;
      console.log(json);
      this.path = "article";
      let articale = await this.send_request({
        method: "POST",
        body: json,
      });
    }

    if (articale) {
      return ArticaleModel(
        articale.id,
        articale.title,
        articale.extPresentation,
        articale.presentationImg,
        articale.content,
        articale.createdAt,
        articale.comments
      );
    }
  }

  async updateBlogArticale(json) {
    if (json.presentationImg.length == undefined) {
      let img_id = await BaseController.uploadFile(json.presentationImg);
      if (img_id) {
        json.presentationImg = img_id;
      }
    } else {
      json.presentationImg = -1;
    }

    if (json.content) {
      this.path = "content";
      let content_id = await this.send_request({
        method: "POST",
        body: { content1: json.content },
      });
      if (content_id) {
        json["content"] = content_id.id;
      }
    }

    this.path = "article/" + json.id;
    let articale = await this.send_request({
      method: "PUT",
      body: json,
    });

    if (articale) {
      return ArticaleModel(
        articale.id,
        articale.title,
        articale.extPresentation,
        articale.presentationImg,
        articale.content,
        articale.createdAt,
        articale.comments
      );
    }
  }
}
