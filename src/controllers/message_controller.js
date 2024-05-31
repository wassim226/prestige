import { z, string } from "zod";
import BaseController from "./base_controller";

export default class MessageController extends BaseController {
  static MESSAGES = [];
  constructor(abortController, setError) {
    super(abortController, setError);
    this.path = "message";
    this.schema = z.object({
      sender: string().min(1, "This field can not be blank"),
      message1: string().min(1, "This field can not be blank"),
      senderStName: string().min(1, "This field can not be blank"),
      senderLstName: string().min(1, "This field can not be blank"),
    });

    this.postMessage = this.postMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  get schema() {
    return this.schema_;
  }

  set schema(sch) {
    this.schema_ = sch;
  }

  async getMessage(id) {
    this.path = `message/${id}`;
    let res = await this.send_request({});
    if (res) {
      return res;
    }
  }

  async getMessages() {
    this.path = "message/";
    let res = await this.send_request({});
    if (res) {
      MessageController.MESSAGES = res;
      return res;
    }
  }

  async postMessage(json) {
    this.path = "message";
    let res = await this.send_request({
      method: "POST",
      body: json,
    });
    if (res) {
      return true;
    }
    return false;
  }
}
