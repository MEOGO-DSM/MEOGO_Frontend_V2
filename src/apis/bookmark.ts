import { useMutation } from "@tanstack/react-query";
import { instance } from "./axios";
import { AxiosError } from "axios";

const path = '/bookmark'

/**
 * 북마크 지정
 */
export const addBookmarker = () => {
  return useMutation<void, AxiosError, {school_id: string}>({
    mutationFn: async (school_id) => {
      return instance.post(`${path}?school_id=${school_id}`)
    },
    onSuccess: () => {
      console.log("북마크 지정")
    },
    onError: (err: AxiosError) => {
      console.log(err)
    }
  })
}

/**
 * 북마크 취소
 */

export const deleteBookmarker = () => {
  return useMutation<void, AxiosError, {school_id: string}>({
    mutationFn: async (school_id) => {
      return instance.delete(`${path}?school_id=${school_id}`)
    },
    onSuccess: () => {
      console.log("북마크 취소")
    },
    onError: (err: AxiosError) => {
      console.log(err)
    }
  })
}