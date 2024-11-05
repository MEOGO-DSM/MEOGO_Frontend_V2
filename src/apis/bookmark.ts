import { useMutation } from "@tanstack/react-query";
import { instance } from "./axios";
import { AxiosError } from "axios";

const path = '/bookmark'

/**
 * 북마크 지정
 */
export const addBookmarker = () => {
  return useMutation<void, AxiosError, number>({
    mutationFn: async (schoolId) => {
      return instance.post(`${path}?school_id=${schoolId}`)
    },
    onSuccess: () => {
      console.log("북마크 지정")
    },
    onError: (err: AxiosError) => {
      console.log("북마크 지정 오류", err)
    }
  })
}

/**
 * 북마크 취소
 */

export const deleteBookmarker = () => {
  return useMutation<void, AxiosError, number>({
    mutationFn: async (schoolId) => {
      return instance.delete(`${path}?school_id=${schoolId}`)
    },
    onSuccess: () => {
      console.log("북마크 취소")
    },
    onError: (err: AxiosError) => {
      console.log("북마크 취소 오류", err)
    }
  })
}