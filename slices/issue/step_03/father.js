// The Step Three -- Father Slice
export const father = (set) => ({
  father: true,
  setFather: () => set((state) => ({ father: !state.father })),
  resetFather: () => set({ father: true }),
});
