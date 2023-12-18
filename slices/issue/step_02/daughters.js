// The Step Two -- Daughters Slice
export const daughters = (set) => ({
  daughters: 0,
  setDaughters: (value) => set({ daughters: value }),
  resetDaughters: () => set({ daughters: 0 }),
});
