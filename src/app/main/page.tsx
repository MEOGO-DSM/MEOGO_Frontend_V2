import React from 'react';
import styled from 'styled-components/native';
import Header from '../../components/main/Header';
import {color, Font} from '../../styles';
import {Arrow} from '../../assets';
import EventCard from '../../components/main/EventCard';
import ReviewCard from '../../components/main/ReviewCard';
import {ContentCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SchoolReviewCard} from './Carousel';

interface PropsType {
  schoolName?: string;
  location?: string;
  userName?: string;
  num?: number;
  review?: string;
}

function Main() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <EventCard />
        <AroundSchoolContainer>
          <Title text="최근 학교 리뷰" kind="bold20" />
          <SchoolReviewCard />
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
                <Arrow rotate="right" size={16} color={color.gray400} />
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
  padding: 24px 0;
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

const Title = styled(Font)`
  padding: 0 20px;
`;
