// The Step Three -- General Info Slice
export const generalStepThree = (set) => ({
  hasSiblingsDialog: false,
  setHasSiblingsDialog: (value) => set({ hasSiblingsDialog: value }),
  resetHasSiblingsDialog: () => set({ hasSiblingsDialog: false }),

  hasSiblings: false,
  setHasSiblings: (value) => set({ hasSiblings: value }),
  resetHasSiblings: () => set({ hasSiblings: false }),
});
