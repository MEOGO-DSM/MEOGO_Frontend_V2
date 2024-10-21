import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TopBar } from '../../components/TopBar';
import { TouchableOpacity } from 'react-native';
import { Arrow, Star, Bookmark, Link } from '../../assets';
import { color } from '../../styles/color';
import { Font } from '../../styles/font';
import ImgSlider from '../../components/Review/ImgSlider';
import SchoolTag from '../../components/Review/SchoolTag';
import ListWrap from './List';
import ExpandImage from '../../components/Review/ExpandImage';
import { bookMarking, cancelBookmark } from '../../apis/bookmark';
import { getSchoolInformation } from '../../apis/review/getSchoolInformation';

function Review() {
  const tagData = ['특목고', '마이스터고'];
  const [pressBookmark, setPressBookmark] = useState<boolean>(false);

  const handleClickBookmark = (schoolId: number) => {
    setPressBookmark(!pressBookmark)
    if (!pressBookmark) {
      bookMarking(schoolId)
      console.log("학교를 북마크 하였습니다.")
    }
    else {
      cancelBookmark(schoolId)
      console.log("학교 북마크를 취소하였습니다.")
    }
  }

  useEffect(() => {
    getSchoolInformation()

  }, [])

  return (
    <>
      <ExpandImage />

      <TopBar
        text="대덕소프트웨어마이스터고"
        leftIcon={
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
        }
      />

      <Container contentContainerStyle={{ gap: 6 }}>
        <SchoolContentBox>
          <ImgSlider />

          <InfoWrap>
            <SchoolInfoWrap>
              <TagWrap>
                {tagData.map((value, index) => (
                  <SchoolTag key={index} text={value} />
                ))}
              </TagWrap>
              <SchoolNameAndLocation>
                <Font text="대덕소프트웨어마이스터고" kind="bold24" />
                <Font
                  text="대전광역시 유성구 가정북로 76 "
                  kind="medium14"
                  color="gray500"
                />
              </SchoolNameAndLocation>
              <ScoreAndSatisfaction>
                <ScoreWrap>
                  <Star size={16} full />
                  <ScoreInfo>
                    <Font text="4.0점" kind="medium14" color="amber600" />
                    <Font text="(128)" kind="medium14" color="gray500" />
                  </ScoreInfo>
                </ScoreWrap>
                <Font text="만족도" kind="medium14" color="gray400" />
              </ScoreAndSatisfaction>
            </SchoolInfoWrap>
            <HandleWrap>
              <BookmarkLinkButton
                onPress={() => handleClickBookmark(1)}>
                <Bookmark
                  size={24}
                  color={pressBookmark ? `${color.gray700}` : 'none'}
                />
                <Font text="저장하기" kind="medium16" color="gray700" />
              </BookmarkLinkButton>
              <Line />
              <BookmarkLinkButton>
                <Link />
                <Font text="학교 홈페이지" kind="medium16" color="gray700" />
              </BookmarkLinkButton>
            </HandleWrap>
          </InfoWrap>
        </SchoolContentBox>

        <ListWrap />
      </Container>
    </>
  );
}

export default Review;

const Container = styled.ScrollView`
  position: relative;
  background-color: ${color.gray100};
`;

const SchoolContentBox = styled.View``;

const InfoWrap = styled.View`
  width: 100%;
`;

const SchoolInfoWrap = styled.View`
  background-color: ${color.white};
  padding: 24px 20px;
  gap: 12px;
`;

const TagWrap = styled.View`
  flex-direction: row;
  gap: 4px;
`;

const SchoolNameAndLocation = styled.View`
  flex-direction: column;
  gap: 4px;
`;

const ScoreAndSatisfaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ScoreWrap = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const ScoreInfo = styled.View`
  flex-direction: row;
  gap: 4px;
`;

const HandleWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
`;

const Line = styled.View`
  width: 1px;
  height: 20px;
  border-radius: 100px;
  background-color: ${color.gray200};
`;

const BookmarkLinkButton = styled.TouchableOpacity`
  width: 50%;
  background-color: ${color.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
`;
