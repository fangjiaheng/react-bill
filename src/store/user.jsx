import { request, setToken, getToken } from '@/utils'

export const user = (set) => ({
  token: [],
  // 异步, 其实都是一样的, 直接set就完事了
  fetchLogin: async (loginForm) => {
    const res = await request.post('/authorizations', loginForm)
    set({ token: res.data.token })
    setToken(res.data.token) // 存入本地
    console.log('本地?', getToken())
  },
})