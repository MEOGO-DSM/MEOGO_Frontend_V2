import React, {useState, useEffect} from 'react';
import {Input} from '../../components';
import {Search} from '../../assets';
import styled from 'styled-components/native';
import {color, Font} from '../../styles';
import {schoolList} from '../dummy/schoolList';
import SchoolList from '../../components/signup/SchoolList';
import {SchoolListType, SignupProps} from '../../interfaces';

const tagList = ['초등학교', '중학교', '고등학교', '대학교'];

function FindSchool({control, errors, onSelectSchool}: SignupProps) {
  const [pressed, setPressed] = useState<number>(0);
  const [filteredSchoolList, setFilteredSchoolList] = useState(schoolList);
  const [, setInputValue] = useState<string>('');

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
    <>
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
        <ListBox
          data={filteredSchoolList}
          renderItem={({item}: any) => (
            <SchoolList
              onPress={() => {
                if (onSelectSchool) {
                  onSelectSchool(item.name);
                }
              }}
              name={item.name}
              location={item.location}
            />
          )}
          contentContainerStyle={{paddingBottom: 100}}></ListBox>
      ) : (
        <NotListBox>
          <Font text="학교를 찾지 못했어요" kind="medium16" color="gray400" />
        </NotListBox>
      )}
    </>
  );
}

export default FindSchool;

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

const ListBox = styled.FlatList`
  padding: 8px 20px;
  width: 100%;
`;

const NotListBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
