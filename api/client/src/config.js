import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://personal-video-app.herokuapp.com/"
})

export default axiosInstance