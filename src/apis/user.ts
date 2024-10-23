import {instance} from './axios';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

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

const navigation = useNavigation<StackNavigationProp<any>>();

export const signupHandler = async (data: SignupData) => {
  try {
    const response = await instance.post(`/user/signup`, {
      account_id: data.id,
      name: data.name,
      password: data.password,
      enrolled_school: data.schoolId,
    });
  } catch (error) {
    console.log(error);
    Alert.alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
  }
};

export const loginHandler = async (data: LoginData, navigation: any) => {
  try {
    const response = await instance.post(`/user/login`, {
      account_id: data.id,
      password: data.password,
    });

    await AsyncStorage.setItem('AccessToken', response.data.accessToken);
    await AsyncStorage.setItem('RefreshToken', response.data.refreshToken);
    navigation.navigate('NavBar');
  } catch (error) {
    console.error(error);
    Alert.alert('로그인 오류', '로그인이 실패했습니다.');
  }
};

export const checkDuplicationId = async (data: any) => {
  try {
    const response = await instance.get(`/user/check`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const logoutHandler = async () => {
  try {
    AsyncStorage.clear();
    navigation.navigate('Login');
  } catch (error) {
    console.error(error);
  }
};
