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

export const postTraineeData = async (data) => {
  try {
    const response = await Axios.post(`${configuration.url}${nextApi.trainee}`, {
      data,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const editTraineeData = async (data) => {
  const { _id, name, email } = data;
  try {
    const response = await Axios.put(`${configuration.url}${nextApi.trainee}`, {
      id: _id,
      name,
      email,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteTraineeData = async (data) => {
  const { _id } = data;
  try {
    const response = await Axios.delete(`${configuration.url}${nextApi.trainee}/${_id}`);
    return response;
  } catch (err) {
    return err;
  }
};
