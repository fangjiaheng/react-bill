import { request, setToken, getToken, clearToken } from '@/utils'

export const createUserSlice = (set) => ({
  token: getToken() || '',
  userInfo: {},
  // 异步, 其实都是一样的, 直接set就完事了
  fetchLogin: async (loginForm) => {
    const res = await request.post('/authorizations', loginForm)
    set({ token: res.data.token })
    setToken(res.data.token) // 存入本地
  },
  // 获取用户信息
  fetchUserInfo: async () => {
    const res = await request.get('/user/profile')
    set({ userInfo: res.data })  
  },
  clearUserInfo() {
    set({ token: '', userInfo: {} }) 
    clearToken()
  }
})
