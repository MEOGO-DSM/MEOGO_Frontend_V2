import React from 'react';
import styled from 'styled-components/native';
import {color, Font} from '../../styles';
import {Arrow} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ReviewCard from '../../components/main/ReviewCard';
import {schoolReviews} from '../dummy/schoolInfoandReview';

export const SchoolReviewCard = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      <AroundSchoolList
        horizontal
        pagingEnabled
        contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}
        showsHorizontalScrollIndicator={false}>
        {schoolReviews.map(
          ({schoolName, location, name, star, review}, index) => (
            <ReviewCard
              key={index}
              userName={name}
              location={location}
              schoolName={schoolName}
              num={star}
              review={review}
            />
          ),
        )}
        <SeeMoreSchool onPress={() => navigation.navigate('')}>
          <Font text="리뷰 더보기" kind="medium18" color="gray500" />
          <Arrow rotate="right" color={`${color.gray300}`} />
        </SeeMoreSchool>
      </AroundSchoolList>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  position: relative;
`;

const AroundSchoolList = styled.ScrollView.attrs(() => ({
  snapToInterval: 242,
  decelerationRate: 'fast',
}))`
  gap: 12px;
  flex-direction: row;
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

const ArrowBox = styled.View`
  padding: 10px;
  border-radius: 100px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  position: absolute;
  right: 20px;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
