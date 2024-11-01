import axios from "axios";

export const getKeyword = async() => {
  try {
    const response = await axios.get(
      `http://localhost:8989/review/keyword`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
    return response
  }
  catch(error) {
    console.log("ERROR", error)
  }
}