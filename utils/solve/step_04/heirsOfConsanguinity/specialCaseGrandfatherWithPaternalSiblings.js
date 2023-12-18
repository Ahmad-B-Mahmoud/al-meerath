// Special Case When the Grandfather come with Paternal Siblings in Creed "الشافعي":
import useStore from "@/store";

function specialCaseGrandfatherWithPaternalSiblings() {
  // Variables:
  const {
    grandfather,
    paternalBrothers,
    paternalSisters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
    addIssueNote,
  } = useStore.getState();

  if (grandfather && paternalBrothers && paternalSisters) {
    let allCount =
      parseInt(paternalSisters) + parseInt(paternalBrothers) * 2 + 2;
    let eachStock = parseInt(stocksLeft) / allCount;

    // Calculate Grandfather Earn When Sharing with Siblings:
    if (grandfather.earn < eachStock * 2 * amount) {
      // If Grandfather's Earn < What will earn with Siblings Then The Grandfather will share the siblings Like a brother:
      let paternalBrothersStocks = paternalBrothers * (eachStock * 2);
      let paternalSistersStocks = paternalSisters * eachStock;
      let grandfatherStocks = eachStock * 2;

      // Has paternalBrothers with paternalSisters and the grandfather:
      addHeirsOfConsanguinity({
        title: "الأخوة لأب",
        count: paternalBrothers,
        stocks: paternalBrothersStocks,
        earn: (paternalBrothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addHeirsOfConsanguinity({
        title: "الأخوات لأب",
        count: paternalSisters,
        stocks: paternalSistersStocks,
        earn: (paternalSistersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: grandfatherStocks,
        earn: (grandfatherStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوة لأب كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }

  if (grandfather && paternalBrothers > 0 && paternalSisters === 0) {
    // Only Grandfather with paternalBrothers without paternalSisters:
    let allCount = parseInt(paternalBrothers) + 1;
    let eachStock = parseInt(stocksLeft) / allCount;
    let paternalBrothersStocks = eachStock * paternalBrothers;

    if (grandfather.earn < eachStock * amount) {
      addHeirsOfConsanguinity({
        title: "الأخوة لأب",
        count: paternalBrothers,
        stocks: paternalBrothersStocks,
        earn: (paternalBrothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: eachStock,
        earn: (eachStock * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوة لأب كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }

  if (grandfather && paternalBrothers === 0 && paternalSisters > 0) {
    // Has Grandfather with paternalSisters only:
    let allCount = parseInt(paternalSisters) + 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let paternalSistersStocks = eachStock * paternalSisters;

    if (grandfather.earn < eachStock * 2 * amount) {
      addHeirsOfConsanguinity({
        title: "الأخوات لأب",
        count: paternalSisters,
        stocks: paternalSistersStocks,
        earn: (paternalSistersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: eachStock * 2,
        earn: (eachStock * 2 * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوات لأب كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }
}

export default specialCaseGrandfatherWithPaternalSiblings;
