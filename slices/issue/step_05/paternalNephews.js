// The Step Five -- Nephews Select Slice
export const paternalNephews = (set) => ({
  paternalNephews: 0,
  setPaternalNephews: (value) => set({ paternalNephews: value }),
  resetPaternalNephews: () => set({ paternalNephews: 0 }),
});
