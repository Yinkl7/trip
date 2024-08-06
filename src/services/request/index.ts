import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { BASE_URL, TIMEOUT } from './config'

export interface ResponseType {
  data: any
  [key: string]: any
}

class Request {
  private instance: AxiosInstance

  constructor(baseURL: string, timeout = 1000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // this.instance.interceptors
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'post' })
  }
}

export default new Request(BASE_URL, TIMEOUT)
