
```js
import axios from "axios";
import get from "lodash/get";
import { store } from "../../store/configure";

/**
 * RequestErrorHandler definition
 * @typedef {RequestErrorHandler} RequestErrorHandler
 * @param {Error} error
 * @returns {Boolean} true prevents throwing error
 */

export class RequestCore {
  static headers = {};
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      throw new Error("Axios not instantiated for making requests");
    }
    return RequestCore.instance;
  }

  static createInstance({ baseURL = "", timeout = 1000 } = {}) {
    if (!this.instance) {
      // first use (and probably only one)
      this.subscribeForToken();
    }
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  static subscribeForToken() {
    store.subscribe(() => {
      const { user } = store.getState();
      const { token } = user;
      if (token) {
        RequestCore.headers = {
          ...RequestCore.headers,
          authorization: token.getRaw(),
        };
      } else {
        RequestCore.headers = {
          ...RequestCore.headers,
          authorization: undefined,
        };
      }
    });
  }

  /** @type {String} */
  responseType = "json";
  /** @type {String} */
  contentType = "application/json;charset=UTF-8";
  /** @type {Boolean} */
  rawResponse = false;
  /** @type {RequestErrorHandler} */
  errorHandler = null;
  /** @type {Object} */
  extraHeaders;
  /** @type {String} */
  url;

  get instance() {
    return RequestCore.getInstance();
  }

  /**
   * @param {String} method
   * @param {String} url
   * @param {Object} extraHeaders
   * @param {String} contentType
   * @param {String} responseType
   * @param {Boolean} rawResponse
   * @param {RequestErrorHandler} errorHandler
   */
  constructor(
    method = "get",
    url = "",
    {
      extraHeaders = {},
      contentType,
      responseType,
      rawResponse,
      errorHandler,
    } = {}
  ) {
    this.method = method;
    this.url = url;
    this.extraHeaders = extraHeaders;
    contentType && (this.contentType = contentType);
    responseType && (this.responseType = responseType);
    rawResponse && (this.rawResponse = rawResponse);
    errorHandler && (this.errorHandler = errorHandler);
  }

  fire({
    urlParams = {},
    queryParams = {},
    data = {},
    onUploadProgress = () => {},
  } = {}) {
    let url = this.url;

    return this.instance
      .request({
        url: url,
        method: this.method,
        responseType: this.responseType,
        params: queryParams,
        data: data,
        headers: {
          "Content-Type": this.contentType,
          ...RequestCore.headers,
          ...this.extraHeaders,
        },
        onUploadProgress,
      })
      .then((response) => {
        if (this.rawResponse) {
          return response;
        } else {
          return response.data;
        }
      })
      .catch((error) => {
        if (this.errorHandler) {
          if (this.errorHandler(error)) {
            return;
          }
        } else {
          // TODO
        }
        const data = get(error, "response.data", {});
        return Promise.reject({
          error,
          data,
          messages: data.messages || {},
        });
      });
  }
}
```