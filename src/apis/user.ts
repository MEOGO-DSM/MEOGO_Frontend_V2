import {instance} from './axios';

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
      console.error(err);
    });
};

export const loginHandler = async (data: LoginData) => {
  return await instance
    .post(`${auth}/login`, {account_id: data.id, password: data.password})
    .then()
    .catch(err => {
      console.error(err);
    });
};

export const checkDuplicationId = async (data: any) => {
  try {
    const response = await instance.get(`/user/check`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
