import {instance} from './axios';

export const applyToken = (jwt: string) => {
  instance.defaults.headers.Authorization = `Bearer ${jwt}`;
};

export const clearToken = () => {
  instance.defaults.headers.Authorization = '';
};
