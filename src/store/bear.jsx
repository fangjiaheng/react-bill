export const createBearSlice = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),  // 需要用到老数据的情况
  removeAllBears: () => set({ bears: 0 }),
})