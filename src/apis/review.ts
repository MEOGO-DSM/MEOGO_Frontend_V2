import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { AxiosError } from "axios";
import {
  ReviewFormData,
  SchoolReviewList,
  SchoolReviewImage,
  SchoolRankAndRating
} from "../interfaces";

const path = '/review';
const navigation = useNavigation<StackNavigationProp<any>>();

/**
 * 리뷰 작성
 */
export const createReview = () => {
  return useMutation<void, AxiosError, ReviewFormData>({
    mutationFn: async (reviewData) => {
      const { request, image } = reviewData;
      return instance.post(`${path}`, {
        ...request,
        images: image
      });
    },
    onSuccess: () => {
      navigation.navigate("/Review");
    },
    onError: (err: AxiosError) => {
      console.log(err)
      if (err.response && err.response.status === 409) {
        console.log("리뷰를 작성하실 수 없습니다.");
      }
    }
  });
};

/**
 * 리뷰 수정 (나중에 명세서 보고 다시 고치기)
 */
export const modifyReview = () => {
  return useMutation<void, AxiosError, {reviewData: ReviewFormData, review_id: string}>({
    mutationFn: async ({reviewData, review_id}) => {
      const { request, image } = reviewData;
      return instance.patch(`${path}/modify?${review_id}`, {
        ...request,
        images: image
      })
    },
    onSuccess: () => {
      navigation.navigate("/Review")
    },
    onError: (err: AxiosError) => {
      console.log(err)
      if (err.response && err.response.status === 409) {
        console.log("리뷰를 수정할 수 없습니다.");
      }
    }
  })
}

/**
 * 리뷰 삭제
 */

export const deleteReview = () => {
  return useMutation<void, AxiosError, {review_id: string}>({
    mutationFn: async(review_id) => {
      return instance.delete(`${path}?${review_id}`)
    },
    onSuccess: () => {
      console.log("리뷰가 삭제되었습니다")
    },
    onError: (err: AxiosError) => {
      console.log(err)
      console.log("리뷰를 삭제하는 과정에서 오류가 발생하였습니다")
    }
  })
}

/**
 * 학교 별 리뷰 조회
 */

export const getSchoolReviews = (school_id: string) => {
  return useQuery<SchoolReviewList, AxiosError>({
    queryKey: ["SchoolReview", school_id],
    queryFn: async (school_id) => {
      const { data } = await instance.get(`${path}/query?school_id=${school_id}`)
      return data
    }
  })
}

/**
 * 학교 별 리뷰 사진 조회
 */

export const getSchoolImage = (school_id: string) => {
  return useQuery<SchoolReviewImage, AxiosError>({
    queryKey: ["SchoolImage", school_id],
    queryFn: async (school_id) => {
      const { data } = await instance.get(`${path}/pic?school_id=${school_id}`)
      return data
    }
  })
}

/**
 * 학교 별 순위 & 평점
 */

export const getSchoolRankAndRating = (school_id: string) => {
  return useQuery<SchoolRankAndRating, AxiosError>({
    queryKey: ["SchoolRankAndRating", school_id],
    queryFn: async (school_id) => {
      const { data } = await instance.get(`${path}/query/result?school_id=${school_id}`)
      return data
    }
  })
}

