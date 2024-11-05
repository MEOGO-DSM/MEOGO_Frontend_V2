import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./axios";
import { AxiosError } from "axios";
import {
  Question,
  ModifyQuestion,
  QuestionList,
  QuestionType,
  QuestionDetail
} from "../interfaces";

const path = '/question'

/**
 * 질문 작성
 */

export const createQuestion = () => {
  return useMutation<void, AxiosError, Question>({
    mutationFn: async (questionData) => {
      return instance.post(`${path}`, {
        ...questionData
      })
    },
    onSuccess: () => {
      console.log("질문 작성 완료")
    },
    onError: (err: AxiosError) => {
      console.log(err)
    } 
  })
}

/**
 * 질문 수정
 */

export const modifyQuestion = () => {
  return useMutation<void, AxiosError, {question_id: string, body: ModifyQuestion}>({
    mutationFn: async ({question_id, body}) => {
      return instance.patch(`${path}/modify?question_id=${question_id}`, {
        ...body
      })
    },
    onSuccess: () => {
      console.log("질문 수정 완료")
    },
    onError: (err: AxiosError) => {
      console.log(err)
    }
  })
}

/**
 * 질문 삭제
 */

export const DeleteQuestion = () => {
  return useMutation<void, AxiosError, {question_id: string}>({
    mutationFn: async (question_id) => {
      return instance.delete(`${path}?question_id=${question_id}`)
    },
    onSuccess: () => {
      console.log("삭제 완료")
    },
    onError: (err: AxiosError) => {
      console.log(err)
    }
  })
}

/**
 * 학교 별 질문 조회
 */

export const getSchoolQuestion = (school_id: string) => {
  return useQuery<QuestionList[], AxiosError>({
    queryKey: ["SchoolQuestionList", school_id],
    queryFn: async (school_id) => {
      const { data } = await instance.get(`${path}/query?school_id=${school_id}`)
      return data
    }
  })
}

/**
 * 태그 별 질문 조회
 */

export const getTagQuestion = (school_id: string, tag: QuestionType) => {
  return useQuery<QuestionList, AxiosError>({
    queryKey: ["TagQuestionList", school_id, tag],
    queryFn: async () => {
      const { data } = await instance.get(`${path}/query/tag?school_id=${school_id}&tag=${tag}`);
      return data;
    }
  });
};

/**
 * 질문 상세보기
 */

export const getQuestionDetail = (question_id: string) => {
  return useQuery<QuestionDetail, AxiosError>({
    queryKey: ["QuestionDetail", question_id],
    queryFn: async () => {
      const { data } = await instance.get(`${path}/detail?${question_id}`)
      return data
    }
  })
}