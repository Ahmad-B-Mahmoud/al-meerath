// The Step Two -- Granddaughters Slice
export const granddaughters = (set) => ({
  granddaughters: 0,
  setGranddaughters: (value) => set({ granddaughters: value }),
  resetGranddaughters: () => set({ granddaughters: 0 }),
});
