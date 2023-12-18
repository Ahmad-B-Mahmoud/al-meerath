// The Step Two -- General Info Slice
export const generalStepTwo = (set) => ({
  hasDescendants: false,
  setHasDescendants: () =>
    set((state) => ({ hasDescendants: !state.hasDescendants })),
  resetHasDescendants: () => set({ hasDescendants: false }),

  hasMaleDescendants: false,
  setHasMaleDescendants: () =>
    set((state) => ({ hasMaleDescendants: !state.hasMaleDescendants })),
  resetHasMaleDescendants: () => set({ hasMaleDescendants: false }),

  hasFemaleDescendants: false,
  setHasFemaleDescendants: () =>
    set((state) => ({ hasFemaleDescendants: !state.hasFemaleDescendants })),
  resetHasFemaleDescendants: () => set({ hasFemaleDescendants: false }),
});
