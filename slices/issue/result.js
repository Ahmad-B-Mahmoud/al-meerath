// The Steps Result Slice
export const resultSlice = (set) => ({
  heirsOfConsanguinity: [],
  addHeirsOfConsanguinity: (heir) =>
    set((state) => ({
      heirsOfConsanguinity: [...state.heirsOfConsanguinity, heir],
    })),

  editHeirsOfConsanguinity: (title) =>
    set((state) => ({
      heirsOfConsanguinity: state.heirsOfConsanguinity.filter(
        (heirOfConsanguinity) => {
          return heirOfConsanguinity.title != title;
        }
      ),
    })),

  resetHeirsOfConsanguinity: () => set(() => ({ heirsOfConsanguinity: [] })),

  heirsOfFard: [],
  addHeirsOfFard: (heir) =>
    set((state) => ({
      heirsOfFard: [...state.heirsOfFard, heir],
    })),
  editHeirsOfFard: (heirs) => set(() => ({ heirsOfFard: [...heirs] })),
  resetHeirsOfFard: () => set(() => ({ heirsOfFard: [] })),

  issueNote: "",
  addIssueNote: (note) => set(() => ({ issueNote: note })),
  resetIssueNote: () => set(() => ({ issueNote: "" })),

  allStocks: 0,
  addAllStocks: (value) =>
    set((state) => ({
      allStocks: parseInt(state.allStocks) + parseInt(value),
    })),
  resetAllStock: () => set(() => ({ allStocks: 0 })),

  stocksLeft: 0,
  addStocksLeft: (value) => set(() => ({ stocksLeft: value })),
  resetStocksLeft: () => set(() => ({ stocksLeft: 0 })),

  issueType: "",
  addIssueType: (value) => set(() => ({ issueType: value })),
  resetIssueType: () => set(() => ({ issueType: "" })),
});
