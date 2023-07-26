import axios from "axios";

export const fetchCreateNewPost = async(payload) => {
    const {data} = await axios.post("http://localhost:4000/api/v1/post",payload)
    return data
}