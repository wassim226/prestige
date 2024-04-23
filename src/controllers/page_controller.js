import { adaptedJson } from "../constantes";
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
    json.name = typeof json.name === "string" ? json.name : json.name.name;
    this.path = "pages/" + json.name;
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
