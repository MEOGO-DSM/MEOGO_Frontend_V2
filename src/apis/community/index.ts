import { instance } from "../axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ICommunityPosts } from "./type";
import { Alert } from "react-native";

// 커뮤니티 작성
export const writeCommunity = () => {
}

// 커뮤니티 수정
export const editCommunity = () => {
  
}

// 커뮤니티 삭제
export const deleteCommunity = (post_id:string) => {
  const response = async() => {
    await instance.delete(`community?${post_id}`)
  }

  return useMutation(response, {
    onSuccess: () =>
      Alert.alert('원서제출 취소에 성공하였습니다.'),
  });
}

interface PropsType {

}

// 커뮤니티 글 전체 조회
export const getCommunityPosts =() => {
  const response = async() => {
    const {data} = await instance.get(`community/query/all`)
    return data;
  }
  return useQuery<ICommunityPosts[]>(['communityPosts'], response)
}

// import { useQuery } from 'react-query';
// import instance from './instance'; // axios instance 설정 파일 임포트

// export const fetchAllCommunityPosts = () => {
//   const fetchPosts = async () => {
//     const { data } = await instance.get('/community/query/all', {
//       headers: {
//         Authorization: `Bearer ${Access_Token}`, // 필요한 Access Token 입력
//       },
//     });
//     return data;
//   };

//   return useQuery(['communityPosts'], fetchPosts);
// };


// 학교별 커뮤니티 글 조회
export const getSchoolCommunityPosts = () => {

}

// 커뮤니티 글 상세보기
export const getSchoolAllScore = () => {

}

// 내가 쓴 게시글 조회
export const getMyPosts = () => {

}