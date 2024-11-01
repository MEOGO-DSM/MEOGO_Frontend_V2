import React from 'react';
import {styled} from 'styled-components/native';
import {Font, color} from '@/styles';
import {Arrow, Edit, Gear} from '../../assets';
import {ListCard} from './ListCard';
import {TopBar} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface MypageInfoTypes {}

function MyPage() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <>
      <TopBar
        text="MY"
        rightIcon={
          <SettingButton onPress={() => navigation.push('Setting')}>
            <Gear color={color.gray500} />
          </SettingButton>
        }
      />
      <Container contentContainerStyle={{rowGap: 36}}>
        <ProfileBox>
          <ImageBox>
            <Image src="" />
            <EditProfile>
              <Edit color="white" size={16} />
            </EditProfile>
          </ImageBox>
          <UserDetails>
            <Font text="햄스터" kind="bold20" color="black" />
            <Font text="@ hamster12" kind="medium14" color="gray400" />
            <LinkToSchool>
              <Font
                text="대덕소프트웨어마이스터고등학교"
                kind="medium14"
                color="gray400"
              />
              <Arrow size={16} rotate="right" color={color.gray300} />
            </LinkToSchool>
          </UserDetails>
        </ProfileBox>
        <CollectBox>
          <Font text="내 학교" color="black" kind="semi18" />
          <ListCard
            onPress={() => navigation.navigate('BookmarkSchool')}
            type="bookmarkSchool"
            count={0}
          />
        </CollectBox>
        <CollectBox>
          <Font text="내 게시물" color="black" kind="semi18" />
          <PostListBox>
            <ListCard
              onPress={() => navigation.navigate('LikePost')}
              type="likePost"
              count={0}
            />
            <ListCard
              onPress={() => navigation.navigate('WritePost')}
              type="writePost"
              count={0}
            />
          </PostListBox>
        </CollectBox>
      </Container>
    </>
  );
}

export default MyPage;

const Container = styled.ScrollView`
  padding: 56px 24px;
  background-color: ${color.white};
`;

const ProfileBox = styled.View`
  padding-top: 24px;
  gap: 20px;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  border: 1px solid ${color.gray200};
  background-color: ${color.gray100};
`;

const ImageBox = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  position: relative;
`;

const UserDetails = styled.View`
  gap: 4px;
`;

const LinkToSchool = styled.TouchableOpacity`
  gap: 4px;
  align-items: center;
  flex-direction: row;
`;

const EditProfile = styled.TouchableOpacity`
  padding: 6px;
  border-radius: 100px;
  background-color: ${color.black};
  border: 2px solid ${color.white};
  position: absolute;
  bottom: 2px;
  right: 2px;
`;

const CollectBox = styled.View`
  width: 100%;
  gap: 12px;
`;

const PostListBox = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
`;

const SettingButton = styled.TouchableOpacity``;
