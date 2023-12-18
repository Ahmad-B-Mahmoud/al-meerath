// Special Case When Come the Mother, Father and One of the Partners only called "المسألة الغراوية":

import useStore from "@/store";

function specialCaseMotherWithFatherAndPartner() {
  // Variables:
  const {
    father,
    mother,
    wifes,
    husband,
    gender,
    hasDescendants,
    hasSiblings,
    heirsOfFard,
    editHeirsOfFard,
    amount,
    addIssueNote,
  } = useStore.getState();

  if (!hasDescendants && !hasSiblings) {
    // There are no Descendants or Siblings:
    if (gender === "male") {
      if (father && mother && wifes > 0) {
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
        const newAllStocks = 24 - wifesStocks;
        const newA = heirsOfFard.map((heir) => {
          if (heir.title === "الأم") {
            return {
              ...heir,
              stocks: newAllStocks / 3,
              earn: ((newAllStocks / 3) * newAmount) / newAllStocks,
            };
          } else {
            return {
              ...wifesInherit,
            };
          }
        });
        editHeirsOfFard(newA);
        addIssueNote(
          "هنا الأم تأخذ نصيب الثلث الباقي من بعد نصيب الزوجة وهذه المسألة هي مسألة خاصة شهيرة في علم المواريث تدعى المسألة الغراوية."
        );
      }
    } else {
      // Gender === "female":
      if (father && mother && husband) {
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
        const newAllStocks = 24 - husbandStocks;
        const newA = heirsOfFard.map((heir) => {
          if (heir.title === "الأم") {
            return {
              ...heir,
              stocks: newAllStocks / 3,
              earn: ((newAllStocks / 3) * newAmount) / newAllStocks,
            };
          } else {
            return {
              ...husbandInherit,
            };
          }
        });
        editHeirsOfFard(newA);
        addIssueNote(
          "هنا الأم تأخذ نصيب الثلث الباقي من بعد نصيب الزوج وهذه المسألة هي مسألة خاصة شهيرة في علم المواريث تدعى المسألة الغراوية."
        );
      }
    }
  }
}

export default specialCaseMotherWithFatherAndPartner;
