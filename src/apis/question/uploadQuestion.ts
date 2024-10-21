import axios from "axios";

type QuestionType = 'LIFE' | 'ENTRANCE' | 'FACILITIES' | 'ETC';

export const uploadQuestion = async (
  school_id: number,
  content: string,
  question_type: QuestionType | null
) => {
  try {
    const response = await axios.post(
      `http://localhost:8989/question`,
      {
        school_id,
        content,
        question_type
      },
      {
        headers: {
          "Authorization": "Bearer {Access_Token}"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
}
