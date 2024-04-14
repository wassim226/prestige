import { ArticaleModel } from "../models";
import BaseController from "./base_controller";
import { string, z } from "zod";

export default class BlogArticaleController extends BaseController {
  static blogArticale = [];

  constructor(abortController, setError) {
    super(abortController, setError);
    const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
    this.path = "blog_articale";

    this.schema = z.object({
      title: string().min(1, "This field can not be blank"),
      extPresentation: string().min(1, "This field can not be blank"),
      presentationImg: z.any().refine((file) => {
        return ACCEPTED_IMAGE_TYPES.includes(file?.type);
      }, "Only .jpg, .jpeg and .png are supported."),
      content: string().min(1, "This field can not be blank"),
    });
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
    // this.path += "/";
    console.log(json);
    // let articale = await this.send_request({
    //   method: "POST",
    //   query_paramaters: "",
    //   body: json,
    // });

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
}
