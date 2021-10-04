import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://amadeitca9aconsumismo.herokuapp.com/api/"
})