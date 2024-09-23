import axios from 'axios';

interface SignupData {
  id: string;
  email: string;
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

export const login = async (data: LoginData): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post<ApiResponse<any>>(``, data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('axios 에러:', error.response?.data);
    }
    return {
      success: false,
      message: error.response?.data.message || '로그인 실패',
      data: null,
    };
  }
};

export const signup = async (data: SignupData): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post<ApiResponse<any>>(``, data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('axios 에러:', error.response?.data);
    } else {
      console.error('에러:', error);
    }
    return {
      success: false,
      message: error.response?.data.message || '회원가입 실패',
      data: null,
    };
  }
};
