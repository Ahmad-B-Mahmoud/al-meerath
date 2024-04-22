// This Function Will Calculate the Adjustment Stocks for the issue.
import useStore from "@/store";

function adjustmentStocks() {
  // Variables:
  const { allStocks, heirsOfFard, editHeirsOfFard, amount } =
    useStore.getState();

  const newA = heirsOfFard.map((heir) => {
    return {
      ...heir,
      earn: (heir.stocks * amount) / allStocks,
    };
  });

  editHeirsOfFard(newA);
}

export default adjustmentStocks;
