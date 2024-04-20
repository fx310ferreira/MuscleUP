import axios from 'axios';

// local storage for 

const getAxiosInstance = (type: string) => {
  const axiosInstance = axios.create({
    baseURL: 'https://true-olives-shake.loca.lt',
    timeout: 15000
  })

  axiosInstance.interceptors.request.use((config: any) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMThlZjAyNi0wMzA3LTRjZjQtYjYxZS03M2M4ZGMwN2QwZGIiLCJzdWIiOiI1OTJhYzVjMC03MDM0LTQ3MWEtOTQwZC03NWYyMjlmNmM2YWMiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE3MTM2MjMxNDQsImV4cCI6IjE3MTYyNTI4OTAifQ.h7oLJhKb_XMH3__5AIWZyeArHEDIGm7EAomxWQcIyoY'
    config.headers.Authorization = `${token}`
    config.headers['Content-Type'] = type === 'json' ? 'application/json' : 'multipart/form-data'
    return config
  })

  return axiosInstance
}

const axiosInstanceJson = getAxiosInstance('json');

export const api = {
  getUsers() {
    return axiosInstanceJson.get('/api/users/');
  },
};