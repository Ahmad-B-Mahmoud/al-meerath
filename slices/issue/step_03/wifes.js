// The Step Three -- Wifes Slice
export const wifes = (set) => ({
  wifes: 1,
  setWifes: (value) => set({ wifes: value }),
  resetWifes: () => set({ wifes: 1 }),
});
