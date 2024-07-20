import { adaptedJson, getParsedData } from "../constantes";
import BaseController from "./base_controller";

export default class PageController extends BaseController {
  static pages = [];

  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "pages";
    this.schema_ = null;

    this.updatePage = this.updatePage.bind(this);
    this.getElement = this.getElement.bind(this);
    this.getPagesNames = this.getPagesNames.bind(this);
  }

  get updateSchema() {
    return this.schema_;
  }

  set updateSchema(sch) {
    this.schema_ = sch;
  }

  async getElement(name) {
    this.path = "pages/" + name;
    let res = await this.send_request({});
    if (res) {
      // return getParsedData(res);
      return res;
    }
  }

  async getPagesNames() {
    this.path = "pages/names";
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
