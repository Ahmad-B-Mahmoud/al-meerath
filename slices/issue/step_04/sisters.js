// The Step Four -- Sisters Slice
export const sisters = (set) => ({
  sisters: 0,
  setSisters: (value) => set({ sisters: value }),
  resetSisters: () => set({ sisters: 0 }),
});
