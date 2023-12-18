// Calculate Stocks Left from Heirs of Fard:

import useStore from "@/store";

function calculateStocksLeft() {
  // Variables:
  const { allStocks, addStocksLeft, addIssueType } = useStore.getState();

  if (24 - allStocks > 0) {
    addStocksLeft(24 - allStocks);
  }
}

export default calculateStocksLeft;
