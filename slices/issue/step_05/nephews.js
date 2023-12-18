// The Step Five -- Nephews Select Slice
export const nephews = (set) => ({
  nephews: 0,
  setNephews: (value) => set({ nephews: value }),
  resetNephews: () => set({ nephews: 0 }),
});
