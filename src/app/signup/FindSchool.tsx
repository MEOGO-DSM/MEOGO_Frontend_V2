import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {TopBar, Input} from '../../components';
import {Arrow, Search} from '../../assets';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {color, Font} from '../../styles';
import {schoolList} from '../dummy/schoolList';
import SchoolList from '../../components/signup/SchoolList';
import {StackNavigationProp} from '@react-navigation/stack';

const tagList = ['초등학교', '중학교', '고등학교', '대학교'];

function FindSchool() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [pressed, setPressed] = useState<number>(0);
  const [filteredSchoolList, setFilteredSchoolList] = useState(schoolList);
  const [inputValue, setInputValue] = useState<string>('');

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
        text="학교 검색"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
        }
      />
      <SearchBox>
        <Input
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="재학 중인 학교를 검색해주세요"
          icon={<Search color={`${color.gray400}`} />}
        />
      </SearchBox>
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
        <ListBox contentContainerStyle={{paddingBottom: 100}}>
          {filteredSchoolList.map((school, index) => (
            <SchoolList
              onPress={() => {
                navigation.navigate('School2', {schoolName: school.name});
              }}
              key={index}
              name={school.name}
              location={school.location}
            />
          ))}
        </ListBox>
      ) : (
        <NotListBox>
          <Font text="학교를 찾지 못했어요" kind="medium16" color="gray400" />
        </NotListBox>
      )}
    </Container>
  );
}

export default FindSchool;

const Container = styled.View`
  flex: 1;
  padding-top: 60px;
  background-color: ${color.white};
`;

const SearchBox = styled.View`
  padding: 0 20px;
  width: 100%;
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

const ListBox = styled.ScrollView`
  padding: 8px 20px;
  width: 100%;
`;

const NotListBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
