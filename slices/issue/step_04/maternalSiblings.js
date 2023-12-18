// The Step Four -- maternal Siblings Slice
export const maternalSiblings = (set) => ({
  maternalSiblings: 0,
  setMaternalSiblings: (value) => set({ maternalSiblings: value }),
  resetMaternalSiblings: () => set({ maternalSiblings: 0 }),
});
