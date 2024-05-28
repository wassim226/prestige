import { UserModel } from "../models";
import BaseController from "./base_controller";
import { string, z } from "zod";

export default class UserController extends BaseController {
  static schema = z.object({
    password: string(), //.min(8),
    email: string()
      .min(1, "This field can not be blank")
      .email("This is not a valid email."),
  });

  static signupSchema = z
    .object({
      password: string().min(8),
      email: string()
        .min(1, "This field can not be blank")
        .email("This is not a valid email."),
      firstName: string().min(1),
      lastName: string().min(1),
      confirmPassword: string().min(8),
      role: string().optional(),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirm"],
        });
      }
    });

  constructor(abortController, setError) {
    super(abortController, setError);
  }

  async login(json) {
    this.path = "token/";
    let token = await this.send_request({
      method: "POST",
      query_paramaters: "",
      body: json,
    });
    if (token) {
      this.accessToken = token;
      return await this.getUser();
    }
  }

  async getUser() {
    this.path = "user/current/";
    let agent = await this.send_request({ query_paramaters: "" });
    if (agent) {
      // UserController.user = UserModel(
      //   agent.id,
      //   agent.email,
      //   agent.password,
      //   agent.firstName,
      //   agent.lastName,
      //   agent.role,
      //   agent.phone
      // );
      return agent;
    }
  }

  async getUsers() {
    this.path = "user/";
    let agents = await this.send_request({ query_paramaters: "" });
    if (agents) {
      // UserController.user = UserModel(
      //   agent.id,
      //   agent.email,
      //   agent.password,
      //   agent.firstName,
      //   agent.lastName,
      //   agent.role,
      //   agent.phone
      // );
      return agents;
    }
  }

  async checkAuthenticated() {
    let stored_token = window.localStorage.getItem("access");
    if (stored_token != null) {
      this.accessToken = stored_token;
      let user = await this.getUser();
      if (user) {
        this.accessToken = stored_token;
        return user;
      } else {
        this.accessToken = "";
      }
    }
    return false;
  }

  static logout() {
    this.accessToken = "";
    window.localStorage.removeItem("access");
  }

  async signup(json) {
    this.path = "user/";
    delete json.confirmPassword;
    let user = await this.send_request({
      method: "POST",
      query_paramaters: "",
      body: json,
    });
    if (user) {
      return user;
    }
  }
}
