import styled from 'styled-components/native';
import { View } from 'react-native';
import { color, Font } from '../../styles';
import Review from './inquiry/page';
import QAndA from './question/page';
import SchoolInfo from './info/page';
import Photo from './photo/page';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/store/store';
import { selectTab } from '../../utils/store/modules/tabListSelect';

const selectValue = [
export default function List() {
  const dispatch = useDispatch();
  const selectedListValue = useSelector((state: RootState) => state.tabReducer.selectedTab);

  const renderSelectedComponent = () => {
    switch (selectedListValue) {
      case 0:
        return <Review />;
      case 1:
        return <QAndA />;
      case 2:
        return <SchoolInfo />;
      case 3:
        return <Photo />;
      default:
        return null;
    }
  };

  return (
    <>
      <ListContainer>
        {['리뷰', 'Q&A', '학교 정보', '사진'].map((title, index) => (
          <SelectBox
            key={index}
            onPress={() => dispatch(selectTab(index))}
            isSelected={selectedListValue === index}>
            <Font
              text={title}
              kind="semi18"
              color={selectedListValue === index ? 'black' : 'gray500'}
            />
          </SelectBox>
        ))}
      </ListContainer>

      <View>{renderSelectedComponent()}</View>
    </>
  );
}

const ListContainer = styled.View`
  background-color: ${color.white};
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBox = styled.TouchableOpacity<{isSelected: boolean}>`
  border-bottom-width: ${props => (props.isSelected ? '2px' : '0')};
  border-bottom-color: ${color.black};
  padding: 16px 8px;
`;
