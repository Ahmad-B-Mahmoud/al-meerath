// The Step Four -- Brothers Slice
export const brothers = (set) => ({
  brothers: 0,
  setBrothers: (value) => set({ brothers: value }),
  resetBrothers: () => set({ brothers: 0 }),
});
