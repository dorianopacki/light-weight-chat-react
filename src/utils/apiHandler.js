import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default class Api {
  static axiosInstance;
  static user;
  static base;

  static init() {
    if (process.env.REACT_APP_API_URL) {
      this.base = process.env.REACT_APP_API_URL;
    } else {
      this.base = "https://localhost:5010/";
    }

    this.user = useSelector((state) => state.user);
    this.axiosInstance = axios.create({
      baseURL: this.base,
    });
  }

  static get(url, headers) {
    return this.axiosInstance.get(url, headers);
  }

  static post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  static put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  static delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }

  static getWithAuthorization(url) {
    return this.get(url, {
      headers: { Authorization: `Bearer ${this.user.token}` },
    });
  }

  static postWithAuthorization(url, data, additionalHeaders) {
    if (additionalHeaders) {
      let headers = {
        Authorization: `Bearer ${this.user.token}`,
        ...additionalHeaders,
      };
      return this.post(url, data, { headers: headers });
    } else {
      return this.post(url, data, {
        headers: { Authorization: `Bearer ${this.user.token}` },
      });
    }
  }

  static putWithAuthorization(url, data) {
    return this.put(url, data, {
      headers: { Authorization: `Bearer ${this.user.token}` },
    });
  }

  static deleteWithAuthorization(url) {
    return this.delete(url, {
      headers: { Authorization: `Bearer ${this.user.token}` },
    });
  }
}
