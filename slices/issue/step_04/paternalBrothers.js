// The Step Four -- paternal Brothers Slice
export const paternalBrothers = (set) => ({
  paternalBrothers: 0,
  setPaternalBrothers: (value) => set({ paternalBrothers: value }),
  resetPaternalBrothers: () => set({ paternalBrothers: 0 }),
});
