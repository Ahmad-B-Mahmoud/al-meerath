// The Step One -- Amount Slice

export const amount = (set) => ({
  amount: 0,
  error: false,
  setAmount: (value) => set({ amount: value }),
  resetAmount: () => set({ amount: 0 }),
  setError: (value) => set({ error: value }),
  resetError: () => set({ error: false }),
});
