import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Logo_Img, Bookmark} from '../../assets';
import {Font} from '../../styles/font';
import {color} from '../../styles/color';
import StarRating from '../StarRating';

interface PropsType {
  schoolName?: string;
  address?: string;
  score?: number;
  reviewCount?: number;
}

export default function SchoolCard({
  schoolName,
  address,
  score = 0,
  reviewCount = 0,
}: PropsType) {
  const [pressBookmark, setPressBookmark] = useState<boolean>(false);

  return (
    <Container>
      <Content>
        <SchoolBox>
          <Logo_Img size={48} />
          <InfoWrap>
            <SchoolInfoWrap>
              <Font text={schoolName} kind="semi18" />
              <Font text={address} kind="regular14" color="gray500" />
            </SchoolInfoWrap>
            <ReviewWrap>
              <StarRating num={score} />
              <Font
                text={`${reviewCount}개의 리뷰`}
                kind="medium12"
                color="gray400"
              />
            </ReviewWrap>
          </InfoWrap>
        </SchoolBox>

        <BookMarkBox onPress={() => setPressBookmark(!pressBookmark)}>
          <Bookmark
            size={24}
            color={pressBookmark ? `${color.gray700}` : 'none'}
          />
        </BookMarkBox>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
  width: 100%;
`;

const Content = styled.View`
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

const SchoolBox = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const InfoWrap = styled.View`
  padding: 20px 0;
  flex: 1;
  gap: 4px;
`;

const SchoolInfoWrap = styled.View`
  gap: 2px;
`;

const ReviewWrap = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const BookMarkBox = styled.TouchableOpacity`
  padding: 20px;
`;
