// The Step Two -- Great-Grandsons Slice
export const greatgrandsons = (set) => ({
  greatgrandsons: 0,
  setGreatgrandsons: (value) => set({ greatgrandsons: value }),
  resetGreatgrandsons: () => set({ greatgrandsons: 0 }),
});
