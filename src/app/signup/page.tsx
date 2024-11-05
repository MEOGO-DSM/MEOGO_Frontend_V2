import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, Keyboard, Animated, Dimensions} from 'react-native';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Arrow, Warn} from '../../assets';
import {Font, color} from '../../styles';
import {Button, TopBar} from '../../components';
import IdAndPassword from './IdAndPassword';
import Name from './Name';
import FindSchool from './FindSchool';
import School from './School';
import { instance } from '../../apis/axios';

function Signup() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
      passwordCheck: '',
      name: '',
      school: 0,
      schoolName: '',
    },
  });

  const navigation = useNavigation<StackNavigationProp<any>>();
  const progressAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;

  const [page, setPage] = useState<number>(0);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const signupPage = [
    <IdAndPassword control={control} errors={errors} />,
    <Name control={control} errors={errors} />,
    <FindSchool
      control={control}
      errors={errors}
      onSelectSchool={(schoolName: string, school: number) => {
        setSelectedSchool(schoolName);
        setValue('schoolName', schoolName);
        setValue('school', school);
        setPage(page + 1);
      }}
    />,
    <School control={control} errors={errors} schoolName={selectedSchool} />,
  ];

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (page + 1) * 20,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [page]);

  const prevPage = () => {
    if (page === 0) {
      navigation.navigate("Login");
    } else {
      setPage(page - 1);
    }
  };

  const nextPage = handleSubmit(data => {
    Keyboard.dismiss();
    if (page === 1) {
      setVisibleModal(true);
    } else if (page < signupPage.length - 1) {
      setPage(page + 1);
    } else {
      reset();
      setPage(0);
      signupHandler(data)
    }
  });

  const signupHandler = async (data: any) => {
    return await instance
      .post(`user/signup`, {
        account_id: data.id,
        name: data.name,
        password: data.password,
        enrolled_school: data.schoolId,
      })
      .then(response => {
        console.log(response)
        navigation.navigate('Login');
        return response
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  return (
    <Container>
      <TopBar
        text="회원가입"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow />
          </TouchableOpacity>
        }
      />
      <ProgressBar>
        <AnimatedProgress
          style={{
            width: progressAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </ProgressBar>
      {signupPage[page]}
      {!(page === 2) && (
        <ButtonBox>
          <Button text="다음" onPress={nextPage} />
        </ButtonBox>
      )}
      {visibleModal && (
        <ModalScreen width={screenWidth} height={ScreenHeight}>
          <ModalBlank onPress={() => setVisibleModal(false)} />
          <Modal>
            <WarnTextBox>
              <Warn size={36} />
              <TextBox>
                <Font text="실명으로 입력하셨나요?" kind="semi24" />
                <Font
                  text={`입력한 내용은 나중에 수정할 수 없습니다.\n 내용이 맞는지 다시 확인해주세요.`}
                  kind="medium16"
                  color="gray500"
                  style={{textAlign: 'center'}}
                />
              </TextBox>
            </WarnTextBox>
            <TextBox>
              <Button onPress={() => setVisibleModal(false)} text="취소" />
              <Button
                onPress={() => {
                  setPage(page + 1);
                  setVisibleModal(false);
                }}
                silverButton
                text="확인"
              />
            </TextBox>
          </Modal>
        </ModalScreen>
      )}
    </Container>
  );
}

export default Signup;

const Container = styled.View`
  flex: 1;
  padding: 80px 0 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;

const ModalScreen = styled.View<{width: number; height: number}>`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 1000;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  flex: 1;
  top: 0;
  left: 0;
  justify-content: flex-end;
`;

const ModalBlank = styled.Pressable`
  width: 100%;
  height: 100%;
`;

const Modal = styled.View`
  background-color: ${color.white};
  width: 100%;
  gap: 24px;
  padding: 24px 20px 69px;
  border-radius: 24px 24px 0 0;
`;

const WarnTextBox = styled.View`
  gap: 24px;
  width: 100%;
  align-items: center;
  padding: 16px 0;
`;

const TextBox = styled.View`
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const ProgressBar = styled.View`
  width: ${Dimensions.get('window').width};
  height: 2px;
  background-color: ${color.gray100};
  position: absolute;
  top: 64px;
`;

const AnimatedProgress = styled(Animated.View)`
  height: 2px;
  background-color: ${color.black};
`;

const ButtonBox = styled.View`
  padding: 0 20px;
`;
