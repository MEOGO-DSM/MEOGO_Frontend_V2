import axios from "axios";

export const deleteQuestion = async(
  question_id: number
) => {
  try {
    const response = await axios.delete(
      `http://localhost:8989/question?question_id=${question_id}`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}