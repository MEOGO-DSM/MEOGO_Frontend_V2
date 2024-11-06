import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance, setCookie, storeData} from './axios';

interface SignupData {
  id: string;
  password: string;
  name: string;
  schoolId: number;
}

interface LoginData {
  id: string;
  password: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const auth = '/user';

export const signupHandler = async (data: SignupData) => {
  return await instance
    .post(`${auth}/signup`, {
      account_id: data.id,
      name: data.name,
      password: data.password,
      enrolled_school: data.schoolId,
    })
    .then()
    .catch(err => {
      console.log(err);
    });
};

const deviceToken = "dJ48Spz9okiRjoDS6eOXfr:APA91bECH6FfjznuD_jtGM06oCKjLQ3oyNRbnQRfE7ahYEhwBXKs2uy1R430A7Kk2dXd8dhdJ_b8n5DBYuA2vkqCHAHkkOEVp3XKZfC954-b15Tk6YNhLETi0UB-ZGrzDljTSyjBOh4u"

export const loginHandler = async (data: LoginData) => {
  return await instance.post(`user/signin`, {
    account_id: data.id, 
    password: data.password,
    device_token: deviceToken
  })
  .then(response => {
    console.log(response)
    return response
  })
  .catch(err => {
    console.log(err);
  });
};
