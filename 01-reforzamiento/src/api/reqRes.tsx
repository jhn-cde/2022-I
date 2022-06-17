import axios from "axios";

export const reqRestAPI = axios.create({
  baseURL: 'https://reqres.in/api'
})