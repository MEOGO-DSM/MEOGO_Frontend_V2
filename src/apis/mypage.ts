import {instance} from './axios';

interface MypageInfo {
  name: string;
  enrolled_school: number;
  image?: string;
}

export const editMypage = async (mypageInfo: MypageInfo) => {
  try {
    const response = await instance.patch('/user/modify', {
      name: mypageInfo.name,
      enrolled_school: mypageInfo.enrolled_school,
      ...(mypageInfo.image && {image: mypageInfo.image}),
    });
    return response.data;
  } catch (error) {
    console.error('마이페이지 수정 오류:', error);
    throw error;
  }
};

export const getMypage = async () => {
  try {
    const response = await instance.get('/user/my');
    return response.data;
  } catch (error) {
    console.error('마이페이지 조회 오류:', error);
    throw error;
  }
};
