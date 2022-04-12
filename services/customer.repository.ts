import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import BaseService from "./base.service";

export interface BaseResponse {
  id?: number;
}

export interface CustomerData extends BaseResponse {
  customer_code: string;
  customer_name: string;
  email: string;
}

interface CustomerDataV2 extends CustomerData {}

export interface ProductData extends BaseResponse {}

export interface CustomerRepositoryAble {
  getCustomers: () => Promise<CustomerData[]>;
  getList: () => Promise<CustomerData[]>;
}

export interface CustomerRepositoryAbleV2 extends CustomerRepositoryAble {
  getList: () => Promise<CustomerData[]>;
}

export default class CustomerRepository<T extends CustomerData>
  extends BaseService<T>
  implements CustomerRepositoryAble
{
  constructor(axiosRequestConfig: AxiosRequestConfig) {
    super(axiosRequestConfig);
  }

  getList(): Promise<CustomerData[]> {
    return Promise.reject("not support");
  }

  async getCustomers(): Promise<CustomerData[]> {
    const request = await this.instance.get<CustomerData[]>("/customers");

    return request.data;
  }
}

export class CustomerRepositoryV2 extends CustomerRepository<CustomerDataV2> {
  constructor() {
    super({
      baseURL: "https://my-json-server.typicode.com/comdocks/nuvo/V2",
    });
  }

  async getList(): Promise<CustomerDataV2[]> {
    return Promise.resolve([]);
  }
}
