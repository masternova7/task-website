import axios from "axios";

// change the baseURL
const instance = axios.create({
    baseURL: "http://localhost:4000"
})

export default instance;