import axios from 'axios'

// import { MessageBox, Message } from 'element-ui'

import { token } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE.APP.BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    // if(){}
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 20000) {
      location.reload()
    } else {
      return res
    }
    return Promise.reject(new Error(res.message || 'Error'))
  },
  error => {
    console.log('error' + error)
    return Promise.reject(error)
  }
)

export default service