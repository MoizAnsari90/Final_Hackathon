import axios from "axios"

export const Api_client = axios.create({
    baseURL : "http://localhost:8000",
    timeout : 5000,
    headers :{
        "Content-Type" : "application/json"
    }
})