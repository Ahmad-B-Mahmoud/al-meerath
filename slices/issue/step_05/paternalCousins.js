// The Step Five -- PaternalCousins Select Slice
export const paternalCousins = (set) => ({
  paternalCousins: 0,
  setPaternalCousins: (value) => set({ paternalCousins: value }),
  resetPaternalCousins: () => set({ paternalCousins: 0 }),
});
