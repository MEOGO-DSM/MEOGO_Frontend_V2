import axios from "axios";

export const showDetailQuestion = async(
  question_id: number
) => {
  try {
    const response = await axios.get(
      `http://localhost:8989/question/detail?question_id=${question_id}`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
    return response.data
  } catch (error) {
    console.log("ERROR", error)
    return null
  }
}