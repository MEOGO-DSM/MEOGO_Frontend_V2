import axios from "axios";

export const modifyReview = async(
  content: string,
  star: number,
  key_word: Array<string>
) => {
  try {
    const response = await axios.patch(
      `http://localhost:8989/review/modify?review_id`,
      {
        headers: {
          "Contents-Type" : "application/json",
          "Authorization" : "Bearer {Access_Token}"
        },
        request: {
          content,
          star,
          key_word
        }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}