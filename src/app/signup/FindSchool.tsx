import React, {useState, useEffect} from 'react';
import {Input} from '../../components';
import {Search} from '../../assets';
import styled from 'styled-components/native';
import {color, Font} from '../../styles';
import SchoolList from '../../components/signup/SchoolList';
<<<<<<< Updated upstream
import {SchoolListType, SignupProps} from '../../interfaces';
import {StackNavigationProp} from '@react-navigation/stack';

const tagList = ['초등학교', '중학교', '고등학교', '대학교'];



function FindSchool() {
  const navigation = useNavigation<StackNavigationProp<any>>();
=======
import {fetchSchoolList} from '../../apis/school';

const tagList = ['초등학교', '중학교', '고등학교', '대학교'];

function FindSchool({onSelectSchool}: any) {
>>>>>>> Stashed changes
  const [pressed, setPressed] = useState<number>(0);
  const [filteredSchoolList, setFilteredSchoolList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      fetchSchoolList(
        tagList[pressed],
        inputValue,
        setLoading,
        setFilteredSchoolList,
      );
    }
  }, [inputValue, pressed]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
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
            onPress={() => setPressed(index)}
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

      {loading ? (
        <NotListBox>
          <Font text="로딩 중..." kind="medium16" color="gray400" />
        </NotListBox>
      ) : filteredSchoolList.length > 0 ? (
        <ListBox
          data={filteredSchoolList}
          keyExtractor={(item: any) => item.schoolName}
          renderItem={({item}: any) => (
            <SchoolList
              onPress={() => {
                if (onSelectSchool) {
                  onSelectSchool(item.schoolName, item.seq);
                }
              }}
              name={item.schoolName}
              location={item.region || '지역 정보 없음'}
            />
          )}
          contentContainerStyle={{paddingBottom: 100}}
        />
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
