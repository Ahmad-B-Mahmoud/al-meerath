// The Step Two -- Great-Granddaughters Slice
export const greatgranddaughters = (set) => ({
  greatgranddaughters: 0,
  setGreatgranddaughters: (value) => set({ greatgranddaughters: value }),
  resetGreatgranddaughters: () => set({ greatgranddaughters: 0 }),
});
