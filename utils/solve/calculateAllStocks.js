// Calculate All Heirs of Fard Stocks:
import useStore from "@/store";

function calculateAllStocks() {
  const { addAllStocks, heirsOfFard } = useStore.getState();

  heirsOfFard.map((heir) => {
    addAllStocks(heir.stocks);
  });
}

export default calculateAllStocks;
