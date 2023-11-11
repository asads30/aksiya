import axios from "axios";

import { callbackIterableArray } from "@/utilities/callbackIterableArray";
import { callbackIterableObject } from "@/utilities/callbackIterableObject";
import { checkType } from "@/utilities/checkType";
import { deepCopy } from "@/utilities/deepCopy";
import { hasOwnProperty } from "@/utilities/hasOwnProperty";
// import router from "../router";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

/**
 *
 * @param {Object} config
 * @returns {Object}
 */
const requestInterceptor = (config) => {
  // Do something before request is sent
  return config;
};
/**
 *
 * @param {Object} response
 * @returns {Object}
 */
const responseInterceptor = (response) => {
  // Do something with response data
  return response;
};
/**
 * Actions for handling errors by status code
 */
const errorStatus = {
  400: function () {
    console.log("400 error from API, handle in apiClient.js");
  },
  401: function () {
    console.log("401 error from API, handle in apiClient.js");
    // clearCookie().finally(() => {
    //   if (router.currentRoute.value.name !== AUTH_COMPONENT_NAME) {
    //     router.push({ name: AUTH_COMPONENT_NAME });
    //   }
    // });
  },
  403: function () {
    console.log("403 error from API, handle in apiClient.js");
    // router.replace({ name: "error403" });
  },
  404: function () {
    console.log("404 error from API, handle in apiClient.js");
    // router.push({ name: "error404" });
  },
  /**
   * Indicates that previously valid authentication has expired.
   * Though not a part of the HTTP standard, the 419 status code is used as an alternative to 401
   * to differentiate from unauthorized clients being denied access.
   */
  419: function () {
    console.log("419 error from API, handle in apiClient.js");
    // router.back() || router.push("/");
  },
  500: function () {
    console.log("500 error from API, handle in apiClient.js");
    // router.push({ name: "server-error" });
  },
};

export const generateError = function (error) {
  // if (error.response?.data && '$parsed' in error.response.data) return Promise.reject(error.response.data);
  if (
    hasOwnProperty(error?.response?.data, "errors") &&
    checkType(error?.response?.data?.errors, "object")
  ) {
    const result = {};
    const errors = deepCopy(error.response.data.errors);
    for (const key in errors) {
      result[key] = errors[key].join("<br />");
    }
    return Promise.reject(result);
  } else if (
    hasOwnProperty(error?.response?.data, "error") &&
    checkType(error?.response?.data?.error, "object") &&
    hasOwnProperty(error?.response?.data?.error, "message")
  ) {
    const result = error.response.data.error.message;
    return Promise.reject(result);
  } else if (
    hasOwnProperty(error?.response?.data, "lang") &&
    checkType(error?.response?.data?.lang, "object")
  ) {
    // const locale = app.config.globalProperties.$i18n?.global?.locale;
    const result = error.response.data.lang["ru"];
    return Promise.reject(result);
  } else if (
    hasOwnProperty(error?.response?.data, "message") &&
    checkType(error?.response?.data?.message, "string") &&
    error?.response?.data?.message !== ""
  ) {
    return Promise.reject({ ...error.response.data });
  }
  return Promise.reject(
    error.response?.data?.$parsed?.join(", ") ??
      "Network connection error, please try again later"
  );
};

const errorInterceptor = (e) => {
  if (e.response?.status in errorStatus) {
    errorStatus[e.response?.status](e);
  }
  const $parsed = ((error) => {
    const e = error?.response?.data ?? "Неизвестная ошибка";
    const parser = (e) => {
      let result = [];
      const callback = (object) => {
        if (checkType(object, "string")) result.push(object);
        if (checkType(object, "array")) callbackIterableArray(object, callback);
        if (checkType(object, "object"))
          callbackIterableObject(object, callback);
      };
      if (checkType(e, "array")) callbackIterableArray(e, callback);
      if (checkType(e, "object")) callbackIterableObject(e, callback);
      result = checkType(e, "string") ? [e] : result;
      return result.filter((e) => e.trim() !== "");
    };
    return checkType(e, "object") && "errors" in e
      ? parser(e.errors)
      : parser(e);
  })(e);
  return generateError({
    ...e,
    response: {
      ...e.response,
      data: { ...e.response?.data, $parsed },
    },
  });
};

apiClient.interceptors.request.use(requestInterceptor, errorInterceptor);
apiClient.interceptors.response.use(responseInterceptor, errorInterceptor);

// export const setApiLocaleHeader = function (lang) {
//   apiClient.defaults.headers.common["Locale"] = lang;
// };

export { apiClient };
