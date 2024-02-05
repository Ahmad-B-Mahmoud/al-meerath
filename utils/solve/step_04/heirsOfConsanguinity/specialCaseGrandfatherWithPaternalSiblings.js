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
    hasFemaleDescendants,
    editHeirsOfConsanguinity,
    removeHeirOfFard,
    addHeirsOfFard,
    addAllStocks,
  } = useStore.getState();

  // Calculate the Grandfather sixth cut earn:
  const fatherSixthCutEarn = (amount * 4) / 24;

  /** First Case: Grandfather with paternalBrothers & paternalSisters */
  if (grandfather && paternalBrothers && paternalSisters) {
    let allCount =
      parseInt(paternalSisters) + parseInt(paternalBrothers) * 2 + 2;
    let eachStock;

    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }

    // Calculate Grandfather Earn When Sharing with Siblings:
    if (fatherSixthCutEarn < (eachStock * 2 * amount) / 24) {
      // If Grandfather's Earn < What will earn with Siblings Then The Grandfather will share the siblings Like a brother:
      let paternalBrothersStocks = paternalBrothers * (eachStock * 2);
      let paternalSistersStocks = paternalSisters * eachStock;
      let grandfatherStocks = eachStock * 2;

      // Remove the Grandfather from the Heirs of Fard.
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // Has paternalBrothers with paternalSisters and the grandfather:
      // PaternalBrothers:
      editHeirsOfConsanguinity("الأخوة لأب");
      addHeirsOfConsanguinity({
        title: "الأخوة لأب",
        count: paternalBrothers,
        stocks: paternalBrothersStocks,
        earn: (paternalBrothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // PaternalSisters:
      editHeirsOfConsanguinity("الأخوات لأب");
      addHeirsOfConsanguinity({
        title: "الأخوات لأب",
        count: paternalSisters,
        stocks: paternalSistersStocks,
        earn: (paternalSistersStocks * amount) / 24,
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
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوة لأب كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        allCount = parseInt(paternalSisters) + parseInt(paternalBrothers) * 2;
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let paternalBrothersStocks = paternalBrothers * (eachStock * 2);
        let paternalSistersStocks = paternalSisters * eachStock;

        // Has paternalBrothers with paternalSisters and the grandfather:
        // paternalBrothers:
        editHeirsOfConsanguinity("الأخوة لأب");
        addHeirsOfConsanguinity({
          title: "الأخوة لأب",
          count: paternalBrothers,
          stocks: paternalBrothersStocks,
          earn: (paternalBrothersStocks * amount) / 24,
          proof:
            'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
        });
        // paternalSisters:
        editHeirsOfConsanguinity("الأخوات لأب");
        addHeirsOfConsanguinity({
          title: "الأخوات لأب",
          count: paternalSisters,
          stocks: paternalSistersStocks,
          earn: (paternalSistersStocks * amount) / 24,
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
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الإخوة لأب كأخ."
        );
      }
    }
  }

  /** Second Case: Grandfather with only PaternalBrothers without PaternalSisters: */
  if (grandfather && paternalBrothers > 0 && paternalSisters === 0) {
    // Only Grandfather with paternalBrothers without paternalSisters:
    let allCount = parseInt(paternalBrothers) + 1;
    let eachStock;

    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }

    let paternalBrothersStocks = eachStock * paternalBrothers;

    if (fatherSixthCutEarn < (eachStock * amount) / 24) {
      // Remove the Grandfather from the heirs of Fard:
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // PaternalBrothers:
      editHeirsOfConsanguinity("الأخوة لأب");
      addHeirsOfConsanguinity({
        title: "الأخوة لأب",
        count: paternalBrothers,
        stocks: paternalBrothersStocks,
        earn: (paternalBrothersStocks * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      // Grandfather
      addHeirsOfConsanguinity({
        title: "الجد أبو الأب",
        count: 1,
        stocks: eachStock,
        earn: (eachStock * amount) / 24,
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏ سورة النساء آية رقم 176."',
      });
      addIssueNote(
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوة لأب كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        allCount = parseInt(paternalBrothers);
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let paternalBrothersStocks = paternalBrothers * eachStock;

        // Has paternalBrothers and the grandfather:
        // PaternalBrothers:
        editHeirsOfConsanguinity("الأخوة لأب");
        addHeirsOfConsanguinity({
          title: "الأخوة لأب",
          count: paternalBrothers,
          stocks: paternalBrothersStocks,
          earn: (paternalBrothersStocks * amount) / 24,
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
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الإخوة لأب كأخ."
        );
      }
    }
  }

  /** Third Case: Grandfather with only PaternalSisters without PaternalBrothers: */
  if (grandfather && paternalBrothers === 0 && paternalSisters > 0) {
    // Has Grandfather with paternalSisters only:
    let allCount = parseInt(paternalSisters) + 2;
    let eachStock;
    if (hasFemaleDescendants) {
      // Add the Grandfather's stocks to stocksLeft:
      eachStock = (parseInt(stocksLeft) + 4) / allCount;
    } else {
      eachStock = parseInt(stocksLeft) / allCount;
    }

    let paternalSistersStocks = eachStock * paternalSisters;

    if (fatherSixthCutEarn < (eachStock * 2 * amount) / 24) {
      // Remove the Grandfather from the heirs of Fard:
      hasFemaleDescendants ? removeHeirOfFard("الجد أبو الأب") : null;

      // PaternalSisters:
      editHeirsOfConsanguinity("الأخوات لأب");
      addHeirsOfConsanguinity({
        title: "الأخوات لأب",
        count: paternalSisters,
        stocks: paternalSistersStocks,
        earn: (paternalSistersStocks * amount) / 24,
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
        "هنا نصيب الجد أبو الأب بالمشاركة مع الأخوات لأب كأخ أكبر من نصيبه بالسدس لذلك فالمشاركة هي الأصح للجد."
      );
    } else {
      // Grandfather's Earn >= What will earn with Siblings Then The Grandfather will keep getting the Sixth cut's earn:
      if (!hasFemaleDescendants) {
        // The Case if there is no female descendants:
        /** 
        allCount = parseInt(paternalSisters);
        eachStock = (parseInt(stocksLeft) - 4) / allCount; // 4: is the Grandfather's stocks
        let paternalSistersStocks = paternalSisters * eachStock;

        // Has paternalSisters and the grandfather:
        // PaternalSisters:
        editHeirsOfConsanguinity("الأخوات لأب");
        addHeirsOfConsanguinity({
          title: "الأخوات لأب",
          count: paternalSisters,
          stocks: paternalSistersStocks,
          earn: (paternalSistersStocks * amount) / 24,
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
          "هنا نصيب الجدّ أبو الأب السدس لأن نصيبه من السدس أكبر أو يساوي نصيبه من المشاركة مع الأخوات لأب كأخ."
        );
      }
    }
  }
}

export default specialCaseGrandfatherWithPaternalSiblings;
