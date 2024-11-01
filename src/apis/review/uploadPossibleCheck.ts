import axios from "axios";

export const uploadPossibleCheck = async (school_id: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8989/review/match?${school_id}`,
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