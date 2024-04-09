import { ArticaleModel } from "../models";
import BaseController from "./base_controller";
import { string, z } from "zod";

export default class BlogArticaleController extends BaseController {
  static blogArticale = [];
  static schema = z.object({
    issuer: string().min(1, "This field can not be blank"),
    NIF: string(),
    phone: string().min(1, "This field can not be blank"),
    address: string().min(1, "This field can not be blank"),
    description: string().min(1, "This field can not be blank"),
  });

  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "blog_articale";
  }

  //   async getBlogArticale() {
  //     let temp_BlogArticale = [];
  //     let res = await this.send_request({ query_paramaters: "" });
  //     if (res) {
  //       res.results.map((claim, ind) => {
  //         temp_BlogArticale.push(
  //           ClaimModel(
  //             claim.id,
  //             claim.issuer,
  //             claim.NIF,
  //             claim.description,
  //             claim.address,
  //             claim.is_completed ? "fixed" : "unfixed",
  //             claim.created_at.split("T")[0],
  //             claim.phone
  //           )
  //         );
  //       });
  //       BlogArticaleController.BlogArticale = temp_BlogArticale;
  //     }
  //     return temp_BlogArticale;
  //   }

  //   async getClaim(id) {
  //     this.path += `/${id}`;
  //     let claim = await this.send_request({ query_paramaters: "" });
  //     if (claim) {
  //       return ClaimModel(
  //         claim.id,
  //         claim.issuer,
  //         claim.NIF,
  //         claim.description,
  //         claim.address,
  //         claim.is_completed ? "fixed" : "unfixed",
  //         claim.created_at.split("T")[0],
  //         claim.phone
  //       );
  //     }
  //   }

  async createBlogArticale(json) {
    this.path += "/";

    let articale = await this.send_request({
      method: "POST",
      query_paramaters: "",
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
