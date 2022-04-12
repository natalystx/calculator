import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseResponse } from "./customer.repository";

export default class BaseService<T extends BaseResponse> {
  protected instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleResponse = (response: AxiosResponse<T>) => {
    if (response.status === 200) {
      console.log(response.data.id);
    }

    if (response.status === 401) {
    }
    return response;
  };

  protected handleError = (error: any) => Promise.reject(error);
}
