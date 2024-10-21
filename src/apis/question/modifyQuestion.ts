import axios from "axios";

type QuestionType = 'LIFE' | 'ENTRANCE' | 'FACILITIES' | 'ETC';

export const modifyQuestion = async (
  question_id: number,
  content: string,
  question_type: QuestionType
  ) => {
  try {
    const response = await axios.patch(
      `http://localhost:8989/question/modify?question_id=${question_id}`,
      {
        content,
        question_type
      },
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
  } catch(error) {
    console.log("ERROR", error)
  }
}