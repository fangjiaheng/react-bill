const URL = 'http://geek.itheima.net/v1_0/channels'

export const createChannelSlice = (set) => ({
  channelList: [],
  // 异步, 其实都是一样的, 直接set就完事了
  fetchGetList: async () => {
    const res = await fetch(URL)
    const jsonRes = await res.json()
    console.log(jsonRes.data.channels)
    set({ channelList: jsonRes.data.channels })
  }
})