export default class BaseController {
  static BASE_URL =
    process.env.NODE_ENV == "production"
      ? "http://api.prestige-piscine-paysage.fr"
      : "http://localhost:5171";
  static #ACCESSTOKEN = "";

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
    let res;
    try {
      res = await fetch(
        `${BaseController.BASE_URL}/${this.path}?${
          params.query_paramaters ?? ""
        }`,
        {
          // signal: this.abortController.current?.signal,
          headers: params.headers ?? {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + BaseController.#ACCESSTOKEN,
          },
          method: params.method ?? "GET",
          body: JSON.stringify(params.body),
        }
      );

      if (res.ok) {
        let json = await res.json();
        if (json) {
          return json;
        }
      }

      this.setError(() => res.status);
    } catch (e) {
      if (e.name == "SyntaxError" && res.ok) {
        return res.ok;
      }
      if (e.name == "AbortError") {
        console.log("aborted");
      }
      this.setError(() => {
        return { code: 1, message: e };
      });
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

  static async uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${BaseController.BASE_URL}/${"files/upload"}`, {
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

  static async getFile(fileId) {
    try {
      const res = await fetch(`${BaseController.BASE_URL}/files/${fileId}`, {
        method: "GET",
      });

      if (res.status == 200) {
        return await res.blob();
      } else {
        throw Error("File download failed.");
      }
    } catch (e) {
      if (e.name == "AbortError") {
        console.log("aborted");
      }
      console.error("File download failed: ", e);
    }
  }
}
