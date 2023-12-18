// The Steps Store Slice
export const steps = (set) => ({
  steps: 0,
  lastActiveStep: 0,
  goNextStep: () => set((state) => ({ steps: state.steps + 1 })),
  goPreviousStep: () => set((state) => ({ steps: state.steps - 1 })),
  goLastStep: () => set(() => ({ steps: 5 })),
  setLastActiveStep: (val) => set(() => ({ lastActiveStep: val })),
  goLastActiveStep: () => set((state) => ({ steps: state.lastActiveStep })),
  resetSteps: () => set({ steps: 0, lastActiveStep: 0 }),
});
