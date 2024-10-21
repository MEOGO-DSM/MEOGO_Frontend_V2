import styled from 'styled-components/native';
import SchoolCard from '../../components/search/SchoolCard';
import React, {useEffect, useState} from 'react';
import {Font, color} from '@/styles';
import {useNavigation} from '@react-navigation/native';
import {searchSchool} from '../dummy/searchSchool';
import {TopBar} from '@/components';
import {Arrow} from '@/assets';
import {StackNavigationProp} from '@react-navigation/stack';

export default function BookmarkSchool() {
  const tagList = ['초등학교', '중학교', '고등학교', '대학교'];
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [pressed, setPressed] = useState<number>(0);
  const [filteredSchoolList, setFilteredSchoolList] = useState(searchSchool);

  const filterSchoolList = (tag: string) => {
    const filtered = searchSchool.filter(i => i.schoolName.endsWith(tag));
    setFilteredSchoolList(filtered);
  };

  useEffect(() => {
    filterSchoolList(tagList[pressed]);
  }, [pressed]);

  return (
    <SchoolListConteiner>
      <TopBar
        leftIcon={<Arrow onPress={() => navigation.goBack()} />}
        text="북마크한 학교"
      />
      <TagContainer>
        {tagList.map((tag, index) => (
          <TagBox
            onPress={() => {
              setPressed(index);
              filterSchoolList(tag);
            }}
            press={pressed === index}
            key={index}>
            <Font
              kind={'medium16'}
              text={tag}
              color={pressed === index ? 'black' : 'gray400'}
            />
          </TagBox>
        ))}
      </TagContainer>

      {filteredSchoolList.length > 0 ? (
        <SchoolCardWrap contentContainerStyle={{paddingBottom: 100}}>
          {filteredSchoolList.map(
            ({schoolName, address, score, reviewCount}, index) => (
              <SchoolCard
                key={index}
                schoolName={schoolName}
                address={address}
                score={score}
                reviewCount={reviewCount}
              />
            ),
          )}
        </SchoolCardWrap>
      ) : (
        <NoSchoolWrap>
          <Font text="학교를 찾지 못했어요" kind="medium16" color="gray400" />
        </NoSchoolWrap>
      )}
    </SchoolListConteiner>
  );
}

const SchoolListConteiner = styled.View`
  padding-top: 56px;
  background-color: ${color.white};
  height: 100%;
`;

const TagContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  gap: 16px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray200};
`;

const TagBox = styled.TouchableOpacity<{press: boolean}>`
  padding: 16px 0;
  ${({press}) => press && 'border-bottom-width: 2px;'}
  border-bottom-color: ${color.black};
`;

const SchoolCardWrap = styled.ScrollView`
  background-color: ${color.white};
  padding: 8px 20px;
`;

const NoSchoolWrap = styled.View`
  flex: 1;
  background-color: ${color.white};
  justify-content: center;
  align-items: center;
`;
