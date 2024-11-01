import axios from "axios";

export const uploadReview = async (
  images: Array<string>,
  content: string,
  star: number,
  key_word: Array<string>
) => {
  try {
    const response = await axios.post(
      `http://localhost:8989/review`,
      {
        headers: {
          "Contents-Type" : "application/json",
          "Authorization" : "Bearer {Access_Token}"
        },
        request: {
          request: {
            content,
            star,
            key_word
          },
          images
        }
      }
    )
    return response
  } catch(error: any) {
    console.log("ERROR", error)
    return {
      success: false,
      message: error.response?.data.message || '리뷰 작성 실패',
      data: null,
    }
  }
}