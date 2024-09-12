import React, {useState, useEffect} from 'react';
import {Arrow, Search} from '../../assets';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../styles/color';
import {Font} from '../../styles/font';
import {schoolList} from '../dummy/schoolList';
import SelectBox from '../../components/Review/SelectBox';
import SchoolCard from '../../components/search/SchoolCard';
import {TopBar, Input} from '../../components';
import {searchSchool} from '../dummy/searchSchool';

const tagList = ['초등학교', '중학교', '고등학교', '대학교'];
const selectList = ['전체 지역', '학교 유형', '세부 유형'];

function FindSchool() {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState<number>(0);
  const [filteredSchoolList, setFilteredSchoolList] = useState(schoolList);
  const [inputValue, setInputValue] = useState<string>('');
  const isSchoolData = searchSchool.length;

  useEffect(() => {
    if (inputValue) filterInputValue();
  }, [inputValue]);

  const filterInputValue = () => {
    const filtered = schoolList.filter(i => i.name.includes(inputValue));
    setFilteredSchoolList(filtered);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const filterSchoolList = (tag: string) => {
    const filtered = schoolList.filter(i => i.name.endsWith(tag));
    setFilteredSchoolList(filtered);
  };

  return (
    <Container>
      <TopBar
        padding={8}
        leftIcon={<Arrow />}
        rightIcon={
          <SearchBox>
            <Input
              noError
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="원하는 학교를 검색해주세요!"
              icon={<Search color={`${color.gray400}`} />}
            />
          </SearchBox>
        }
      />

      <SelectContainer>
        {selectList.map(value => (
          <SelectBox text={value} />
        ))}
      </SelectContainer>

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

      {isSchoolData ? (
        <SchoolCardWrap>
          {searchSchool.map(value => (
            <SchoolCard
              schoolName={value.schoolName}
              address={value.address}
              score={value.score}
              reviewCount={value.reviewCount}
            />
          ))}
        </SchoolCardWrap>
      ) : (
        <NoSchoolWrap>
          <Font text="학교를 찾지 못했어요" kind="medium16" color="gray400" />
        </NoSchoolWrap>
      )}
    </Container>
  );
}

export default FindSchool;

const Container = styled.View`
  background-color: ${color.white};
  padding-top: 64px;
  flex: 1;
`;

const SearchBox = styled.View`
  flex: 1;
  padding-left: 20px;
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

const SelectContainer = styled.View`
  padding: 8px 20px;
  gap: 6px;
  flex-direction: row;
  justify-content: flex-end;
`;

const SchoolCardWrap = styled.ScrollView`
  padding: 8px 20px;
`;

const NoSchoolWrap = styled.View`
  flex: 1;
  background-color: ${color.white};
  justify-content: center;
  align-items: center;
`;
