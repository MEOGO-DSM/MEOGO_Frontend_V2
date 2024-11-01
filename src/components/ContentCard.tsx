import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {color} from '../styles/color';
import {Font} from '../styles/font';
import {Heart, Logo_Img, Menu} from '../assets';
import Tag from './Tag';

interface PropsType {
  title?: string;
  content?: string;
  tag?: string[];
  date?: string;
  img?: string;
  onPress?: () => void;
}

const tagList = ['학교폭파', '지구멸망'];

export const ContentCard = ({
  title = '아진짜대마고',
  content = '폭발시켜버리고 싶다',
  tag,
  date = '02.19 23:36',
  img,
  onPress,
}: PropsType) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [more, setMore] = useState<boolean>(false);

  const handleOutsidePress = () => {
    if (more) {
      setMore(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <Container onPress={onPress} activeOpacity={1}>
        <PostContent>
          <TextBox>
            <Font text={title} kind="semi18" />
            <Font
              text={content}
              kind="medium14"
              style={{height: 36}}
              color="gray400"
            />
          </TextBox>
          <ContentImg>{img ? <></> : <Logo_Img size={40} />}</ContentImg>
        </PostContent>
        <TagListBox>
          <Tag school text="대덕소프트웨어마이스터고" />
          {tagList.map((i, j) => (
            <Tag text={i} key={j} />
          ))}
        </TagListBox>
        <UserBox>
          <PostedDate>
            <Font text="익명" kind="medium14" />
            <Font text={date} kind="medium12" color="gray400" />
          </PostedDate>
          <OtherFeat>
            <IconBox
              onPress={e => {
                e.stopPropagation();
                setPressed(!pressed);
              }}>
              <Heart
                color="gray500"
                fill={pressed ? `${color.gray500}` : 'none'}
              />
            </IconBox>
            <IconBox
              onPress={e => {
                e.stopPropagation();
                setMore(!more);
              }}>
              <Menu color="gray500" />
            </IconBox>
            {more && (
              <MoreMessage>
                <Font text="신고하기" color="red" kind="medium16" />
              </MoreMessage>
            )}
          </OtherFeat>
        </UserBox>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const MoreMessage = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 36px;
`;

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 0;
  gap: 8px;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const PostContent = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TextBox = styled.View`
  gap: 4px;
`;

const ContentImg = styled.View`
  border-radius: 8px;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray100};
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
`;

const TagListBox = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;

const UserBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const PostedDate = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const OtherFeat = styled.View`
  flex-direction: row;
  gap: 4px;
  position: relative;
`;

const IconBox = styled.TouchableOpacity`
  padding: 4px;
`;
