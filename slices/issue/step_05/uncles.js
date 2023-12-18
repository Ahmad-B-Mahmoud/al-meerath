// The Step Five -- Uncles Select Slice
export const uncles = (set) => ({
  uncles: 0,
  setUncles: (value) => set({ uncles: value }),
  resetUncles: () => set({ uncles: 0 }),
});
