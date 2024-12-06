import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = undefined;

applyCaseMiddleware(axios);

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
    return config;
  };

  const onResponseSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onResponseError = (err: any) => {
    const status = err?.status || (err?.response ? err?.response.status : 0);
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }

    return Promise.reject(err);
  };

  axios.defaults.baseURL = '/api';
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
