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

// export const login = async (data: LoginData): Promise<ApiResponse<any>> => {
//   try {
//     const response = await axios.post<ApiResponse<any>>(``, data);
//     return response.data;
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       console.error('axios 에러:', error.response?.data);
//     }
//     return {
//       success: false,
//       message: error.response?.data.message || '로그인 실패',
//       data: null,
//     };
//   }
// };
const auth = '/user';

export const postSignup = async (data: SignupData) => {
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

export const postLogin = () => {};
