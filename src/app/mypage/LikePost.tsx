import styled from 'styled-components/native';
import SchoolCard from '../../components/search/SchoolCard';
import React, {useEffect, useState} from 'react';
import {Font, color} from '@/styles';
import {useNavigation} from '@react-navigation/native';
import {searchSchool} from '../dummy/searchSchool';
import {ContentCard, TopBar} from '@/components';
import {Arrow} from '@/assets';
import {StackNavigationProp} from '@react-navigation/stack';

export default function LikePost() {
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
        text="좋아요한 게시물"
      />
      <Container contentContainerStyle={{paddingBottom: 100}}>
        <ContentCard onPress={() => navigation.navigate('Post')} />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Container>
    </SchoolListConteiner>
  );
}

const SchoolListConteiner = styled.View`
  padding-top: 56px;
  background-color: ${color.white};
  height: 100%;
`;

const Container = styled.ScrollView`
  padding: 0 20px;
  background-color: white;
`;

const NoSchoolWrap = styled.View`
  flex: 1;
  background-color: ${color.white};
  justify-content: center;
  align-items: center;
`;
