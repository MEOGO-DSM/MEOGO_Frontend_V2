import {Font, color} from '@/styles';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

interface PropsType {
  text?: string;
  mark?: boolean;
  selected?: boolean;
  onPress?: () => void;
}

export const NewMarkTag = ({
  text,
  mark,
  selected = false,
  onPress,
}: PropsType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container selected={selected}>
        <Font text={text} />
        {mark && (
          <NewMark>
            <Font text="N" kind="semi14" color="amber600" />
          </NewMark>
        )}
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled.View<{selected: boolean}>`
  display: flex;
  flex-direction: row;
  padding: 8px 10px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid
    ${({selected}) => (selected ? color.amber300 : color.gray200)};
  background-color: ${({selected}) => (selected ? color.amber50 : color.white)};
`;

const NewMark = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 100px;
  background-color: ${color.amber50};
`;
