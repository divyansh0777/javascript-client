import Axios from 'axios';
import { configuration } from '../../configs/configuration';
import * as nextApi from './APIConstants';

export const callLoginApi = (data, setLoaderDefault) => {
  const {
    email, password, history,
  } = data;
  Axios.post(`${configuration.loginApi}${nextApi.login}`, {
    email,
    password,
  })
    .then((res) => {
      localStorage.setItem('token', res.data.data);
      history.push('/trainee');
    })
    .catch(() => {
      setLoaderDefault();
    });
};
