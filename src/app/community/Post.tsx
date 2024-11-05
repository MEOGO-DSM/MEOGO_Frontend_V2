import React from 'react';
import styled from 'styled-components/native';
import {TopBar} from '../../components/TopBar';
import {Arrow, Menu} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../styles/font';
import {color} from '../../styles/color';
import Tag from '../../components/Tag';
import Comment from '../../components/community/Comment';
import InputComment from './InputComment';
import {StackNavigationProp} from '@react-navigation/stack';

function Post() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <>
      <TopBar
        text="대덕소프트웨어마이스터고"
        leftIcon={<Arrow onPress={() => navigation.goBack()} />}
      />
      <Container contentContainerStyle={{paddingBottom: 100}}>
        <PostBox>
          <TopBox>
            <InfoBox>
              <Font text="익명" kind="semi14" />
              <Font text="02.19 23:36" kind="medium14" color="gray400" />
            </InfoBox>
            <Menu color={color.gray500} />
          </TopBox>
          <ContentBox>
            <Font text="아진짜대마고" kind="semi24" />
            <Line />
            <Content>
              <Font
                text="정말 대마고는 폭발해야한다고 생각합니다 진짜 이건좀 아닌 것 같네요"
                kind="regular16"
              />
            </Content>
          </ContentBox>
          <TagBox>
            <Tag school text="대덕소프트웨어마이스터고" />
            <Tag text="학교폭파" />
          </TagBox>
        </PostBox>
        <CommentContainer>
          <CommentTotalNum>
            <Font text="댓글" kind="semi18" />
            <Font text="3" kind="medium18" color="gray500" />
          </CommentTotalNum>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </CommentContainer>
      </Container>
      <InputComment />
    </>
  );
}

export default Post;

const Container = styled.ScrollView`
  width: 100%;
  background-color: white;
  padding-top: 60px;
`;

const PostBox = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px 20px;
`;

const TopBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const InfoBox = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const ContentBox = styled.View`
  width: 100%;
  gap: 12px;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.gray100};
`;

const Content = styled.View`
  min-height: 100px;
  width: 100%;
`;

const TagBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px 0;
`;

const CommentContainer = styled.View`
  padding: 16px 20px;
  width: 100%;
  background-color: ${color.gray50};
`;

const CommentTotalNum = styled.View`
  flex-direction: row;
  gap: 8px;
`;
