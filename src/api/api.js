import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6c488209-dce2-4433-a8ed-e59e78351743',
  }
})

export const getUsers = (currentPage = 1, pageSize = 3) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)//чтобы в компонент не передавать весь ответ с кучей данных, вычленяем из ответа тшолько нужные нам данные, и в компонент передаем толькл их
}

export const getPageChange = (page, pageSize) => {
  return instance.get(`users?page=${page}&count=${pageSize}`)
  .then(response => response.data)
}

export const getPageSize = (pageSize) => {
  return instance.get(`users?page=${1}&count=${pageSize}`)
  .then(response => response.data)
}

export const getFollow = (userId) => {
  return instance.post(`follow/${userId}`)
}

export const getUnfollow = (userId) => {
  return instance.delete(`follow/${userId}`)
}

