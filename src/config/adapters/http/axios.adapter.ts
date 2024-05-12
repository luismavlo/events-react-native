import axios, { AxiosInstance,AxiosResponse } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
  baseURL: string;
  params?: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter {

  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
    })
  }

  async get<T> (url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;

    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }

  async post<T> (url: string, body?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, body);
      console.log(response.status);
      console.log(response.data); 
      return response.data;

    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }


}