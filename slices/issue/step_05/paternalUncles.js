// The Step Five -- PaternalUncles Select Slice
export const paternalUncles = (set) => ({
  paternalUncles: 0,
  setPaternalUncles: (value) => set({ paternalUncles: value }),
  resetPaternalUncles: () => set({ paternalUncles: 0 }),
});
