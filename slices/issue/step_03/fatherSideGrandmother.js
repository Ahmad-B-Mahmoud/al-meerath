// The Step Three -- Father-Side Grandmother Slice
export const fatherSideGrandmother = (set) => ({
  fatherSideGrandmother: false,
  setFatherSideGrandmother: () =>
    set((state) => ({ fatherSideGrandmother: !state.fatherSideGrandmother })),
  resetFatherSideGrandmother: () => set({ fatherSideGrandmother: false }),
});
