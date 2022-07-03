import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface WCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WCRequestInterceptors<T>
  showLoading?: boolean
}
