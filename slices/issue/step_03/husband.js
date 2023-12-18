// The Step Three -- Husband Slice
export const husband = (set) => ({
  husband: true,
  setHusband: () => set((state) => ({ husband: !state.husband })),
  resetHusband: () => set({ husband: true }),
});
