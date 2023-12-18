// The Step Three -- Grandfather Slice
export const grandfather = (set) => ({
  grandfather: false,
  setGrandfather: () => set((state) => ({ grandfather: !state.grandfather })),
  resetGrandfather: () => set({ grandfather: false }),
});
