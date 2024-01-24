import { create } from 'zustand'
import { createBearSlice } from './bear'
import { createChannelSlice } from './channel'
import { user } from './user'

// 注意这个a参数
const useStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createChannelSlice(...a),
  ...user(...a),
}))

export default useStore