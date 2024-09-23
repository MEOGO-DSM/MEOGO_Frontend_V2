import { PermissionsAndroid } from 'react-native';

export const RequestStoragePermission = async (): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: '머고?" 앱에서 사용자의 사진에 접근하려고 합니다. 허용하시겠습니까?',
        buttonNegative: '거부',
        buttonPositive: '허용',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('저장공간 사용 가능');
      return true;
    } else {
      console.log('저장 권한 거부');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
