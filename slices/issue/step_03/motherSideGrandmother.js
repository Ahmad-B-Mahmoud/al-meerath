// The Step Three -- Mother-Side Grandmother Slice
export const motherSideGrandmother = (set) => ({
  motherSideGrandmother: false,
  setMotherSideGrandmother: () =>
    set((state) => ({ motherSideGrandmother: !state.motherSideGrandmother })),
  resetMotherSideGrandmother: () => set({ motherSideGrandmother: false }),
});
