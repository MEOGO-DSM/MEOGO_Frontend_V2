import {Logout, Gear, Arrow} from '@/assets';
import {color, Font} from '@/styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {TopBar} from '@/components';
import {Alert} from 'react-native';

export default function Setting() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goAlert = () => {
    Alert.alert('로그아웃해라', '어저고저ㅓㅉ고', [
      {text: '네', onPress: () => {}, style: 'cancel'},
      {text: '아니요', onPress: () => {}, style: 'default'},
    ]);
  };
  return (
    <SetBox>
      <TopBar
        leftIcon={<Arrow onPress={() => navigation.goBack()} />}
        text="내가 작성한 게시물"
      />
      <ButtonBox>
        <SetButton>
          <Gear onPress={() => navigation.goBack()} color={color.gray500} />
          <Font color="gray700" text="설정" kind="medium16" />
        </SetButton>
        <SetButton red onPress={goAlert}>
          <Logout color={color.red} />
          <Font color="red" text="로그아웃" kind="medium16" />
        </SetButton>
      </ButtonBox>
    </SetBox>
  );
}
const SetBox = styled.View`
  width: 100%;
  gap: 10px;
  padding-top: 80px;
  height: 100%;
  background-color: ${color.white};
`;

const SetButton = styled.TouchableOpacity<{red?: boolean}>`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({red}) => (red ? color.red : color.gray200)};
  border-radius: 8px;
  background-color: ${color.white};
  gap: 12px;
  align-items: center;
  flex-direction: row;
`;

const ButtonBox = styled.TouchableOpacity`
  width: 100%;
  padding: 0 24px;
  gap: 12px;
`;
