import { AxiosAdapter } from './http/axios.adapter';


export const cityDBFetcher = new AxiosAdapter({
  baseURL: 'https://backend-events-m4qa.onrender.com/api'
})