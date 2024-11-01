import styled from "styled-components/native";
import { color } from "../../styles";
import { Filter } from '../../assets';
import { NewMarkTag } from './NewMarkTag';
import { useDispatch, useSelector } from 'react-redux';
import { selectTag } from '../../utils/store/modules/questionTagSelect';
import { RootState } from '../../utils/store/store';

const tagList = ["학교생활질문", "그외", "입학관련질문"]

export default function FilterTag() {

  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.questionTagSelect.selectTag)

  const handleTagClick = (value: string) => {
    if (selected === value) {
      dispatch(selectTag(null))
    }
    else {
      dispatch(selectTag(value))
    }
  }

  return (
    <FilterWrap
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 }}
    >
      <FilterIcon>
        <Filter color={color.gray500} />
      </FilterIcon>
      <TagWrap>
        {tagList.map((value, index) => (
          <NewMarkTag
            key={index}
            onPress={() => handleTagClick(value)}
            text={value}
            mark={true}
            selected={selected === value}
          />
        ))}
      </TagWrap>
    </FilterWrap>
  )
}

const FilterWrap = styled.ScrollView`
flex-direction: row;
padding: 8px 0;
`

const TagWrap = styled.View`
display: flex;
flex-direction: row;
gap: 8px;
`

const FilterIcon = styled.View`
  margin-right: 16px;
`