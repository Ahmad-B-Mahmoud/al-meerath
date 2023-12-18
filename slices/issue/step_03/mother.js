// The Step Three -- Mother Slice
export const mother = (set) => ({
  mother: true,
  setMother: () => set((state) => ({ mother: !state.mother })),
  resetMother: () => set({ mother: true }),
});
