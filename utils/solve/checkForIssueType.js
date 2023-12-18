// Check For Issue Type:
import useStore from "@/store";
import adjustmentStocks from "./adjustmentStocks";
import redistributionStocks from "./redistributionStocks";

function checkForIssueType() {
  const { stocksLeft, addIssueType, allStocks, heirsOfConsanguinity } =
    useStore.getState();

  if (stocksLeft === 0 || (stocksLeft > 0 && heirsOfConsanguinity.length > 0)) {
    addIssueType("عادلة");
  }

  if (stocksLeft > 0 && heirsOfConsanguinity.length === 0) {
    addIssueType("رديّة");
    redistributionStocks();
  }

  if (24 - allStocks < 0) {
    addIssueType("عائلة");
    adjustmentStocks();
  }
}

export default checkForIssueType;
