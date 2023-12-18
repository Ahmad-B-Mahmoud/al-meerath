// The Step Two -- Grandsons Slice
export const grandsons = (set) => ({
  grandsons: 0,
  setGrandsons: (value) => set({ grandsons: value }),
  resetGrandsons: () => set({ grandsons: 0 }),
});
