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
    hasFemaleDescendants,
    editHeirsOfConsanguinity,
    removeHeirOfFard,
    addHeirsOfFard,
    addAllStocks,
  } = useStore.getState();

  // Calculate the Grandfather sixth cut earn:
  const fatherSixthCutEarn = (amount * 4) / 24;

  /** First Case: Grandfather with Brothers & Sisters */
  if (grandfather && brothers && sisters) {
    // Calculate Grandfather Earn When Sharing with Siblings:
    let allCount = parseInt(sisters) + parseInt(brothers) * 2 + 2;
    let eachStock;

    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }

    if (fatherSixthCutEarn < (eachStock * 2 * amount) / 24) {
      // If Grandfather's Earn < What will earn with Siblings Then The Grandfather will share the siblings Like a brother:
      let brothersStocks = brothers * (eachStock * 2);
      let sistersStocks = sisters * eachStock;
      let grandfatherStocks = eachStock * 2;

      // Remove the Grandfather from the Heirs of Fard.
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // Has brothers with sisters and the grandfather:
      // Brothers:
      editHeirsOfConsanguinity("الأخوة الأشقاء");
      addHeirsOfConsanguinity({
        title: "الأخوة الأشقاء",
        count: brothers,
        stocks: brothersStocks,
        earn: (brothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // Sisters:
      editHeirsOfConsanguinity("الأخوات الشقيقات");
      addHeirsOfConsanguinity({
        title: "الأخوات الشقيقات",
        count: sisters,
        stocks: sistersStocks,
        earn: (sistersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // Grandfather:
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: grandfatherStocks,
        earn: (grandfatherStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوة الأشقاء كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        allCount = parseInt(sisters) + parseInt(brothers) * 2;
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let brothersStocks = brothers * (eachStock * 2);
        let sistersStocks = sisters * eachStock;

        // Has brothers with sisters and the grandfather:
        // Brothers:
        editHeirsOfConsanguinity("الأخوة الأشقاء");
        addHeirsOfConsanguinity({
          title: "الأخوة الأشقاء",
          count: brothers,
          stocks: brothersStocks,
          earn: (brothersStocks * amount) / 24,
          proof:
            'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
        });
        // Sisters:
        editHeirsOfConsanguinity("الأخوات الشقيقات");
        addHeirsOfConsanguinity({
          title: "الأخوات الشقيقات",
          count: sisters,
          stocks: sistersStocks,
          earn: (sistersStocks * amount) / 24,
          proof:
            'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
        });
        // Grandfather:
        addHeirsOfFard({
          title: "الجد أبو الأب",
          count: 1,
          cut: "السدس",
          stocks: 4,
          earn: fatherSixthCutEarn,
          proof:
            'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
        });
        addIssueNote(
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الإخوة الأشقّاء كأخ."
        );
      }
    }
  }

  /** Second Case: Grandfather with only Brothers without Sisters: */
  if (grandfather && brothers > 0 && sisters === 0) {
    let allCount = parseInt(brothers) + 1;
    let eachStock;

    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }

    if (fatherSixthCutEarn < (eachStock * amount) / 24) {
      let brothersStocks = eachStock * brothers;

      // Remove the Grandfather from the heirs of Fard:
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // Brothers:
      editHeirsOfConsanguinity("الأخوة الأشقاء");
      addHeirsOfConsanguinity({
        title: "الأخوة الأشقاء",
        count: brothers,
        stocks: brothersStocks,
        earn: (brothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // Grandfather:
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: eachStock,
        earn: (eachStock * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوة الأشقاء كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        allCount = parseInt(brothers);
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let brothersStocks = brothers * eachStock;

        // Has brothers and the grandfather:
        // Brothers:
        editHeirsOfConsanguinity("الأخوة الأشقاء");
        addHeirsOfConsanguinity({
          title: "الأخوة الأشقاء",
          count: brothers,
          stocks: brothersStocks,
          earn: (brothersStocks * amount) / 24,
          proof:
            'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
        });
        // Grandfather:
        addHeirsOfFard({
          title: "الجد أبو الأب",
          count: 1,
          cut: "السدس",
          stocks: 4,
          earn: fatherSixthCutEarn,
          proof:
            'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
        });
        addIssueNote(
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الإخوة الأشقّاء كأخ."
        );
      }
    }
  }

  /** Third Case: Grandfather with only Sisters without Brothers: */
  if (grandfather && brothers === 0 && sisters > 0) {
    let allCount = parseInt(sisters) + 2;
    let eachStock;

    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }
    if (fatherSixthCutEarn < (eachStock * 2 * amount) / 24) {
      // Remove the Grandfather from the heirs of Fard:
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // Sisters:
      let sistersStocks = eachStock * sisters;
      editHeirsOfConsanguinity("الأخوات الشقيقات");
      addHeirsOfConsanguinity({
        title: "الأخوات الشقيقات",
        count: sisters,
        stocks: sistersStocks,
        earn: (sistersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // Grandfather:
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: eachStock * 2,
        earn: (eachStock * 2 * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوات الشقيقات كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        /** 
        allCount = parseInt(sisters);
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let sistersStocks = sisters * eachStock;

        // Has sisters and the grandfather:
        // Sisters:
         
        editHeirsOfConsanguinity("الأخوات الشقيقات");
        addHeirsOfConsanguinity({
          title: "الأخوات الشقيقات",
          count: sisters,
          stocks: sistersStocks,
          earn: (sistersStocks * amount) / 24,
          proof:
            'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
        });*/
        // Grandfather:
        addHeirsOfFard({
          title: "الجد أبو الأب",
          count: 1,
          cut: "السدس",
          stocks: 4,
          earn: fatherSixthCutEarn,
          proof:
            'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
        });
        // Add the Grandfather's stocks to total allStocks:
        addAllStocks(4);
        addIssueNote(
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الأخوات الشقيقات كأخ."
        );
      }
    }
  }
}

export default specialCaseGrandfatherWithSiblings;
