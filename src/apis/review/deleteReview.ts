import axios from "axios";

export const deleteReview = async(review_id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:8989/review?`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        },
        params: {
          review_id
        }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}