export default class BaseController {
  static BASE_URL =
    process.env.NODE_ENV == "production"
      ? "http://127.0.0.1:8000"
      : "http://localhost:5171";
  static #ACCESSTOKEN = "";
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExOTAzMjg1LCJpYXQiOjE3MDk0ODQwODUsImp0aSI6ImUxNjg1MDc0OGM2ZTQ3MzdiNWRkNTEwMTE5ODgxZWQ4IiwidXNlcl9pZCI6M30.DH3HP19HcIBJ6Oqf6QlKHX9yIb3RSGT7ejrNr5-43DU
  constructor(abortController, setError) {
    this.path = "";

    this.abortController = abortController;
    this.setError = setError;

    this.status_code = -1;
  }

  /**
   * @param {string} token
   */
  set accessToken(token) {
    if (token == "") {
      window.localStorage.removeItem("access");
    } else {
      window.localStorage.setItem("access", token);
    }
    BaseController.#ACCESSTOKEN = token;
  }

  async send_request(params) {
    // this.abortController.current?.abort();
    // this.abortController.current = new AbortController();

    try {
      const res = await fetch(
        `${BaseController.BASE_URL}/${this.path}?${
          params.query_paramaters ?? ""
        }`,
        {
          // signal: this.abortController.current?.signal,
          headers: params.headers ?? {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: "Bearer " + BaseController.#ACCESSTOKEN,
          },
          method: params.method ?? "GET",
          body: JSON.stringify(params.body),
        }
      );

      if (res.ok) {
        // if (this.path != "token")
        //   this.setError(() => {
        //     return { code: null, message: null };
        //   });
        return await res.json();
      }

      // this.setError(()=>res.status); //{return {code : res.status, message : res.statusText}}
    } catch (e) {
      if (e.name == "AbortError") {
        console.log("aborted");
      }

      this.setError(() => {
        return { code: 1, message: e };
      });
    } finally {
      console.log("finaly block");
    }
  }

  static async isNotExpired(tkn) {
    try {
      const res = await fetch(`${BaseController.BASE_URL}/token/verify/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ token: tkn }),
      });

      return res.ok;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static async checkAuthenticated() {
    let stored_token = window.localStorage.getItem("access");
    if (stored_token != null) {
      if (await this.isNotExpired(stored_token)) {
        BaseController.#ACCESSTOKEN = stored_token;
        return true;
      }
    }
    return false;
  }

  static async uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${BaseController.BASE_URL}/${"files/upload"}`, {
        // signal: this.abortController.current?.signal,
        // headers: params.headers ?? {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        //   Authorization: "Bearer " + BaseController.#ACCESSTOKEN,
        // },
        method: "POST",
        body: formData,
      });

      if (res.status == 201) {
        return await res.json();
      } else {
        throw Error("File upload failed.");
      }
    } catch (e) {
      if (e.name == "AbortError") {
        console.log("aborted");
      }
      console.error("File upload failed: ", e);
    }
  }
}
