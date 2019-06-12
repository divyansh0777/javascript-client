import Axios from 'axios';
import { configuration } from '../../configs/configuration';
import * as nextApi from './APIConstants';
import { axiosConfigure } from '../../configs/Axios';

axiosConfigure();

export const callLoginApi = (data, setLoaderDefault) => {
  const {
    email, password, history,
  } = data;
  Axios.post(`${configuration.url}${nextApi.login}`, {
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

export const getTraineeData = async (limit, skip) => {
  try {
    const response = await Axios.get(`${configuration.url}${nextApi.trainee}?limit=${limit}&skip=${skip}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const postTraineeData = async ({ data = {} }) => {
  try {
    const response = Axios.post(`${configuration.url}${nextApi.trainee}`, {
      data,
    });
    return response;
  } catch (err) {
    return err;
  }
};
