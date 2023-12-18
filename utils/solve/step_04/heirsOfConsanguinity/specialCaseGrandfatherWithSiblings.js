// Special Case When the Grandfather come with Siblings in Creed "الشافعي":
import useStore from "@/store";

function specialCaseGrandfatherWithSiblings() {
  // Variables:
  const {
    grandfather,
    brothers,
    sisters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
    addIssueNote,
  } = useStore.getState();

  if (grandfather && brothers && sisters) {
    let allCount = parseInt(sisters) + parseInt(brothers) * 2 + 2;
    let eachStock = parseInt(stocksLeft) / allCount;

    // Calculate Grandfather Earn When Sharing with Siblings:
    if (grandfather.earn < eachStock * 2 * amount) {
      // If Grandfather's Earn < What will earn with Siblings Then The Grandfather will share the siblings Like a brother:
      let brothersStocks = brothers * (eachStock * 2);
      let sistersStocks = sisters * eachStock;
      let grandfatherStocks = eachStock * 2;

      // Has brothers with sisters and the grandfather:
      addHeirsOfConsanguinity({
        title: "الأخوة الأشقاء",
        count: brothers,
        stocks: brothersStocks,
        earn: (brothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addHeirsOfConsanguinity({
        title: "الأخوات الشقيقات",
        count: sisters,
        stocks: sistersStocks,
        earn: (sistersStocks * amount) / 24,
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
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوة الأشقاء كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }

  if (grandfather && brothers > 0 && sisters === 0) {
    // Only Grandfather with Brothers without Sisters:
    let allCount = parseInt(brothers) + 1;
    let eachStock = parseInt(stocksLeft) / allCount;
    let brothersStocks = eachStock * brothers;

    if (grandfather.earn < eachStock * amount) {
      addHeirsOfConsanguinity({
        title: "الأخوة الأشقاء",
        count: brothers,
        stocks: brothersStocks,
        earn: (brothersStocks * amount) / 24,
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
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوة الأشقاء كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }

  if (grandfather && brothers === 0 && sisters > 0) {
    // Has Grandfather with Sisters only:
    let allCount = parseInt(sisters) + 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let sistersStocks = eachStock * sisters;

    if (grandfather.earn < eachStock * 2 * amount) {
      addHeirsOfConsanguinity({
        title: "الأخوات الشقيقات",
        count: sisters,
        stocks: sistersStocks,
        earn: (sistersStocks * amount) / 24,
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
        "هنا نصيب الجد أبوالأب بالمشاركة مع الأخوات الشقيقات كأخ أكبر من نصيبة بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    }
  }
}

export default specialCaseGrandfatherWithSiblings;
