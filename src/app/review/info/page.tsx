import React from 'react';
import styled from "styled-components/native";
import { Font, color } from '../../../styles';
import Map from './Map';

interface PropsType {
  title?: string,
  content?: React.ReactNode
}

const Row = ({ title, content }: PropsType) => (
  <RowWrap>
    <InfoTitle>
      <Font text={title} kind='medium14' color='gray400' />
    </InfoTitle>
    {typeof content === 'string' ?
      <Font text={content} kind='medium14' color='gray400' />
      : content
    }
  </RowWrap>
);

export default function Info() {

  return (
    <Container>
      <SchoolNameAndAddress>
        <Font text='대덕소프트웨어마이스터고' kind='bold24' />
        <Font text='대전광역시 유성구 가정북로 76' kind='medium14' color='gray500' />
      </SchoolNameAndAddress>
      <MapWrap>
        <Map />
      </MapWrap>
      <SchoolInfo>
        <Row title='설립일자' content='1991년 9월 14일' />
        <Row title='전화번호' content='042-1234-5678' />
        <Row title='유형' content={
          <TypeTag>
            <Font text='마이스터고' kind='medium14' color='gray500' />
          </TypeTag>
        } />
        <Row title='구분' content={
          <SortTag >
            <Font text='공립' kind='medium14' color='amber600' />
          </SortTag>
        } />
      </SchoolInfo>
    </Container>
  );
}

const Container = styled.View`
  padding: 24px 20px;
  gap: 8px;
  background-color: ${color.white};
`;

const MapWrap = styled.View`
  width: 100%;
  height: 240px;
`

const SchoolNameAndAddress = styled.View`
  gap: 4px;
`;

const SchoolInfo = styled.View`
  gap: 6px;
`;

const RowWrap = styled.View`
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const InfoTitle = styled.View`
  width: 64px;
`;

const TypeTag = styled.View`
padding: 4px 12px;
border-radius: 100px;
border-width: 1px;
border-color: ${color.gray200};
background-color: ${color.white};
`

const SortTag = styled.View`
padding: 4px 12px;
border-radius: 100px;
border-width: 1px;
border-color: ${color.amber100};
background-color: ${color.amber50};
`