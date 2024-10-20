import {styled} from 'styled-components/native';
import {Font, color} from '../../styles';
import {Bookmark, Edit, Heart, Menu} from '../../assets';

interface CardProps {
  type: 'bookmarkSchool' | 'likePost' | 'writePost';
  count: number;
}

interface CardInfo {
  title: string;
  icon: JSX.Element;
}

export const ListCard = ({type, count = 0}: CardProps) => {
  const cardType: Record<CardProps['type'], CardInfo> = {
    bookmarkSchool: {
      title: '북마크한 학교',
      icon: <Bookmark color={color.gray500} fill={color.gray500} />,
    },
    likePost: {
      title: '좋아요한 게시물',
      icon: <Heart fill={color.amber500} color={color.amber500} />,
    },
    writePost: {
      title: '내가 작성한 게시물',
      icon: <Edit color={color.gray500} />,
    },
  };

  const {title, icon} = cardType[type] || {title: '', icon: null};

  return (
    <CardBox yellow={type === 'likePost'}>
      <TitleBox>
        {icon}
        <Title>
          <Font kind="semi16" color="black" text={title} />
          <Font kind="medium14" color="gray400" text={`${count} 개`} />
        </Title>
      </TitleBox>
      {/* <Menu vertical color="black" /> */}
    </CardBox>
  );
};

const CardBox = styled.View<{yellow: boolean}>`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  border-radius: 12px;
  padding: 16px;
  background-color: ${({yellow}) => (yellow ? color.amber50 : color.white)};
  border: 1px solid ${({yellow}) => (yellow ? color.white : color.gray200)};
  height: 140px;
`;

const TitleBox = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Title = styled.View`
  gap: 4px;
`;
