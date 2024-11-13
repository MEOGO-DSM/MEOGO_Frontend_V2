import { useState } from 'react';
import styled from 'styled-components/native';
import { Font, color } from '../../../styles';
import { Filter } from '../../../assets';
import WriteButton from '../../../components/Review/WriteButton';
import StarRating from '../../../components/StarRating';
import ReviewBox from '../../../components/Review/ReviewBox';
import { reviewValue } from '../../dummy/reviewValue';
import { useNavigation } from '@react-navigation/native';
import { getSchoolRankAndRating, getSchoolReviews } from '../../../apis/review';
import { useQuery } from '@tanstack/react-query';

const school_id = ''

export default function ReviewWrap() {

  const { data: RankAndRatingData } = getSchoolRankAndRating(school_id);
  const starData = (RankAndRatingData?.star ?? 0).toFixed(1);
  const tags = [
    RankAndRatingData?.tag1,
    RankAndRatingData?.tag2,
    RankAndRatingData?.tag3,
  ];

  const [reviewData, setReviewData] = useState<boolean>(true);

  return (
    <Container>
      <ReviewTotalWrap>
        <ReviewValueContent>
          <ScopeWrap>
            <Font text={starData} kind="semi36" />
            <StarRating num={parseFloat(starData)} isText={false} />
          </ScopeWrap>
         
         <GraphWrap>
            {tags.map((tag, index) => (
              <DataWrap key={index}>
                <Font text={tag?.tag_name} kind="medium12" />
                <DataBar>
                  <Bar width={tag?.percentage && 0 ? tag.percentage * 1.4 : 0} />
                </DataBar>
                <RatioBox>
                  <Font text={`${tag?.percentage ?? 0}%`} kind="medium12" color='gray500' />
                </RatioBox>
              </DataWrap>
            ))}
          </GraphWrap>
        </ReviewValueContent>
      </ReviewTotalWrap>

      <UserReviewWrap>
        <TopWrap>
          <HandleWrap>
            <Font
              text={`신입생을 위한 솔직한\n학교 리뷰를 작성해주세요!`}
              kind="regular12"
              color="gray500"
            />
            <WriteButton />
          </HandleWrap>
          <ReviewAndFilter>
            <Reviews>
              <Font text="리뷰" kind="bold20" />
              <Font text="138" kind="medium20" color="gray500" />
            </Reviews>
            <Filter size={24} color="gray500" />
          </ReviewAndFilter>
        </TopWrap>

        {reviewData ? (
          <ReviewListWrap>
            {
              reviewValue.reviews.map((value, index) => (
                <ReviewBox
                  key={index}
                  user_name={value.user_name}
                  star={value.star}
                  content={value.content}
                  image={value.image}
                />
              ))
            }
          </ReviewListWrap>
        ) : (
          <NoReviewWrap>
            <Font text="아직 리뷰가 없어요!" kind="medium16" />
          </NoReviewWrap>
        )}
      </UserReviewWrap>
    </Container>
  );
}

const Container = styled.View`
  gap: 6px;
`;

const ReviewTotalWrap = styled.View`
  width: 100%;
  background-color: ${color.white};
  padding: 24px 20px;
`;

const ReviewValueContent = styled.View`
  padding: 0px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ScopeWrap = styled.View`
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const GraphWrap = styled.View`
  gap: 4px;
`;

const DataWrap = styled.View`
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  justify-content: flex-end;
  align-items: center;
`;

const DataBar = styled.View`
  width: 140px;
  height: 5px;
  background-color: ${color.gray200};
  border-radius: 8px;
  overflow: hidden;
`;

const Bar = styled.View<{ width: number }>`
  height: 5px;
  width: ${({ width }) => width}px;
  background-color: ${color.amber500};
`;

const RatioBox = styled.View`
  width: 32px;
`;
const UserReviewWrap = styled.View`
  padding: 24px 20px;
  background-color: ${color.white};
`;

const TopWrap = styled.View`
  gap: 24px;
`;

const HandleWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReviewAndFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Reviews = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const ReviewListWrap = styled.View``;

const NoReviewWrap = styled.View`
  padding: 24px 0;
  align-items: center;
`;
