import Axios from 'axios';
import { configuration } from './configuration';

export const axiosConfigure = () => {
  Axios.defaults.baseURL = configuration.url;
  Axios.defaults.headers.common.Authorization = localStorage.getItem('token');
  Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
};
