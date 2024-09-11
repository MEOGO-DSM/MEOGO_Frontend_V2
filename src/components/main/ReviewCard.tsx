import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import {Font} from '../../styles/font';
// import {Bookmark} from '../../assets';
import {color} from '../../styles/color';
// import StarRating from '../StarRating';

interface PropsType {
  schoolName?: string;
  location?: string;
  userName?: string;
  num?: number;
  review?: string;
}

function ReviewCard({
  schoolName = '충남대학교',
  location = '대전 유성구 궁동',
  userName = '김어진',
  num = 4,
  review = '시설도 좋고 학교가 너무 넓어서 다리가 아프다는 게 단점이지 나머지는 나쁘지 않습니다! 학교 축제 때 블랙핑크 불',
}: PropsType) {
  const [pressBookmark, setPressBookmark] = useState<boolean>(false);
  return (
    <ReviewContainer>
      <SchoolBox>
        <SchoolInfo>
          <Font text={schoolName} kind="semi18" color="black" />
          <Font text={location} kind="regular14" color="gray500" />
        </SchoolInfo>
        <BookMarkBox onPress={() => setPressBookmark(!pressBookmark)}>
          {/* <Bookmark
            size={24}
            color={pressBookmark ? `${color.gray700}` : 'none'}
          /> */}
        </BookMarkBox>
      </SchoolBox>
      <UserBox>
        <UserProfile />
        <UserInfo>
          <Font text={userName} kind="medium14" />
          {/* <StarRating num={num} /> */}
        </UserInfo>
      </UserBox>
      <ReviewBox>
        <Font kind="medium14" text={review} color="gray500" />
      </ReviewBox>
    </ReviewContainer>
  );
}

export default ReviewCard;

const ReviewContainer = styled.View`
  border-radius: 8px;
  gap: 16px;
  padding: 20px;
  width: 230px;
  border: 1px solid ${color.gray100};
  margin-right: 12px;
`;

const SchoolBox = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

const SchoolInfo = styled.View`
  gap: 2px;
`;

const BookMarkBox = styled.TouchableOpacity`
  padding: 4px;
`;

const UserBox = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const UserProfile = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background-color: ${color.gray200};
  border: 1px solid ${color.gray100};
`;

const UserInfo = styled.View`
  gap: 2px;
`;

const ReviewBox = styled.View`
  width: 100%;
  height: 54px;
  overflow: hidden;
`;
