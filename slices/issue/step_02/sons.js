// The Step Two -- Sons Slice
export const sons = (set) => ({
  sons: 0,
  setSons: (value) => set({ sons: value }),
  resetSons: () => set({ sons: 0 }),
});
