// This Function Will Calculate the Redistribution Stocks for the issue.
import useStore from "@/store";

function redistributionStocks() {
  // Variables:
  const {
    allStocks,
    heirsOfFard,
    editHeirsOfFard,
    amount,
    creed,
    husband,
    wifes,
    gender,
  } = useStore.getState();

  if (creed === "الحنفي") {
    if (gender === "male") {
      if (wifes > 0) {
        // Need to remove the wifes earn from the total amount:
        let wifesEarn = 0;
        let wifesStocks = 0;
        let wifesInherit = {};
        heirsOfFard.map((heir) => {
          if (heir.title == "الزوجات") {
            wifesEarn = heir.earn;
            wifesStocks = heir.stocks;
            wifesInherit = { ...heir };
            return wifesEarn, wifesStocks, wifesInherit;
          }
        });
        const newAmount = amount - wifesEarn;
        const newAllStocks = allStocks - wifesStocks;
        const newA = heirsOfFard.map((heir) => {
          if (heir.title !== "الزوجات") {
            return {
              ...heir,
              rEarn: (heir.stocks * newAmount) / newAllStocks,
            };
          } else {
            return {
              ...wifesInherit,
            };
          }
        });
        editHeirsOfFard(newA);
      } else {
        // There is no wifes:
        const newA = heirsOfFard.map((heir) => {
          return {
            ...heir,
            rEarn: (heir.stocks * amount) / allStocks,
          };
        });
        editHeirsOfFard(newA);
      }
    } else {
      // Gender is Female:
      if (husband) {
        // Need to remove the husband earn from the total amount:
        let husbandEarn = 0;
        let husbandStocks = 0;
        let husbandInherit = {};
        heirsOfFard.map((heir) => {
          if (heir.title == "الزوج") {
            husbandEarn = heir.earn;
            husbandStocks = heir.stocks;
            husbandInherit = { ...heir };
            return husbandEarn, husbandStocks, husbandInherit;
          }
        });
        const newAmount = amount - husbandEarn;
        const newAllStocks = allStocks - husbandStocks;
        const newA = heirsOfFard.map((heir) => {
          if (heir.title !== "الزوج") {
            return {
              ...heir,
              rEarn: (heir.stocks * newAmount) / newAllStocks,
            };
          } else {
            return {
              ...husbandInherit,
            };
          }
        });
        editHeirsOfFard(newA);
      } else {
        // There is no Husband:
        const newA = heirsOfFard.map((heir) => {
          return {
            ...heir,
            rEarn: (heir.stocks * amount) / allStocks,
          };
        });

        editHeirsOfFard(newA);
      }
    }
  }
}

export default redistributionStocks;
