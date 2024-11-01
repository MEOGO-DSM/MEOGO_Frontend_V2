import axios from "axios";

type QuestionType = 'LIFE' | 'ENTRANCE' | 'FACILITIES' | 'ETC'

export const inquiryTagQuestion = async (
  school_id: number,
  tag: QuestionType
) => {
  try {
    const response = await axios.get (
      `http://localhost:8989/question/query/tag?school_id=${school_id}&tag=${tag}`,
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