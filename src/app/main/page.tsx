import React from 'react';
import styled from 'styled-components/native';
import Header from '../../components/main/Header';
import {color} from '../../styles/color';
import {Font} from '../../styles/font';
import {Arrow} from '../../assets';
import EventCard from '../../components/main/EventCard';
import ReviewCard from '../../components/main/ReviewCard';
import ContentCard from '../../components/ContentCard';
import {useNavigation} from '@react-navigation/native';

interface PropsType {
  schoolName?: string;
  location?: string;
  userName?: string;
  num?: number;
  review?: string;
}

function Main() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <EventCard />
        <AroundSchoolContainer>
          <Font text="주변 학교 리뷰" kind="bold20" />
          <AroundSchoolList horizontal showsHorizontalScrollIndicator={false}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <SeeMoreSchool onPress={() => navigation.navigate()}>
              <Font text="리뷰 더보기" kind="medium18" color="gray500" />
              <Arrow rotate="right" color={`${color.gray300}`} />
            </SeeMoreSchool>
          </AroundSchoolList>
        </AroundSchoolContainer>
        <AllContentList>
          <Font text="오늘 인기글" kind="bold20" />
          <ContentsList>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <MoreContentBox>
              <MoreContentButton
                onPress={() => navigation.navigate('Community')}>
                <Font kind="medium16" text="인기글 더보기" />
                <Arrow rotate="right" size={16} color={`${color.gray400}`} />
              </MoreContentButton>
            </MoreContentBox>
          </ContentsList>
        </AllContentList>
      </Container>
    </>
  );
}

export default Main;

const Container = styled.ScrollView`
  padding-top: 72px;
  padding-bottom: 200px;
  background-color: white;
`;

const AroundSchoolContainer = styled.View`
  gap: 16px;
  padding: 24px 20px;
`;

const AroundSchoolList = styled.ScrollView`
  gap: 12px;
  flex-direction: row;
`;

const AllContentList = styled.View`
  width: 100%;
  gap: 8px;
  padding: 24px 20px;
`;

const ContentsList = styled.View`
  width: 100%;
  padding-bottom: 200px;
`;

const MoreContentBox = styled.View`
  width: 100%;
  padding: 24px 0;
  justify-content: center;
  align-items: center;
`;

const MoreContentButton = styled.TouchableOpacity`
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${color.gray100};
  flex-direction: row;
  align-items: center;
`;

const SeeMoreSchool = styled.TouchableOpacity`
  gap: 16px;
  padding: 20px;
  width: 230px;
  height: 100%;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray100};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
