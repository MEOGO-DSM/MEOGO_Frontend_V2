import axios from "axios";

export const bookMarking = async(school_id: number) => {
  try{
    const response = await axios.post(
      `http://localhost:8989/bookmark?school_id=${school_id}`,
      {
        headers: {
          "Authorization" : `Bearer {Access_Token}`
        }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}