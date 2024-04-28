// The Report a problem form Store Slice
export const reportProblem = (set) => ({
  // For open & close the Form Dialog:
  reportForm: false,
  openReportForm: () => set(() => ({ reportForm: true })),
  closeReportForm: () => set(() => ({ reportForm: false })),
});
