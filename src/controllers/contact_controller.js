import { adaptedJson } from "../constantes";
import BaseController from "./base_controller";

export default class ContactController extends BaseController {
  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "contact";
    this.schema_ = null;

    this.updatePage = this.updatePage.bind(this);
    this.getElement = this.getElement.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  get schema() {
    return this.schema_;
  }

  set schema(sch) {
    this.schema_ = sch;
  }

  async getElement(id) {
    this.path = "contact/" + id;
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async getContacts() {
    this.path += "contact/";
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async updatePage(json) {
    this.path = "contact/0"; // + json.id;
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
