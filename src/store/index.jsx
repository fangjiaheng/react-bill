import { create } from 'zustand'

import { createChannelSlice } from './channel'
import { createUserSlice } from './user'

// 注意这个a参数
const useStore = create((...a) => ({
  ...createChannelSlice(...a),
  ...createUserSlice(...a),
}))

export default useStore