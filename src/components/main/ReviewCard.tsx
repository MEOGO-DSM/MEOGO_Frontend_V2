import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import {Font, color} from '@/styles';
// import {Bookmark} from '../../assets';
// import StarRating from '../StarRating';

interface PropsType {
  schoolName: string;
  location?: string;
  userName?: string;
  num: number;
  review: string;
}

function ReviewCard({schoolName, location, userName, num, review}: PropsType) {
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
      <Font
        ellipsizeMode="tail"
        numberOfLines={3}
        kind="medium14"
        text={review}
        color="gray500"
      />
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
