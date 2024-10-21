import {Logout, Gear} from '@/assets';
import {color, Font} from '@/styles';
import styled from 'styled-components/native';

export default function Setting() {
  return (
    <SetBox>
      <SetButton>
        <Gear color={color.gray500} />
        <Font color="gray700" text="설정" kind="medium16" />
      </SetButton>
      <SetButton red>
        <Logout color={color.red} />
        <Font color="red" text="로그아웃" kind="medium16" />
      </SetButton>
    </SetBox>
  );
}
const SetBox = styled.View`
  width: 100%;
  gap: 10px;
  padding-top: 24px;
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
