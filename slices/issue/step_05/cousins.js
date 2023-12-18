// The Step Five -- Cousins Select Slice
export const cousins = (set) => ({
  cousins: 0,
  setCousins: (value) => set({ cousins: value }),
  resetCousins: () => set({ cousins: 0 }),
});
