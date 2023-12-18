// Paternal Siblings Solve:

import useStore from "@/store";

function paternalSiblings() {
  // Variables:
  const {
    paternalBrothers,
    paternalSisters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
    hasFemaleDescendants,
    sisters,
  } = useStore.getState();

  if (paternalBrothers > 0 && paternalSisters > 0) {
    let allCount = parseInt(paternalSisters) + parseInt(paternalBrothers) * 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let paternalBrothersStocks = paternalBrothers * (eachStock * 2);
    let paternalSistersStocks = paternalSisters * eachStock;

    // Has paternalBrothers with paternalSisters
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
  }

  if (paternalBrothers > 0 && paternalSisters == 0) {
    // Has Only paternalBrothers
    addHeirsOfConsanguinity({
      title: "الأخوة لأب",
      count: paternalBrothers,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }

  if (
    paternalBrothers === 0 &&
    paternalSisters > 0 &&
    hasFemaleDescendants &&
    sisters === 0
  ) {
    addHeirsOfConsanguinity({
      title: "الأخوات لأب",
      count: paternalSisters,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "وَعَنِ ابْنِ مَسْعُودٍ  فِي بِنْتٍ، وَبِنْتِ ابْنٍ، وَأُخْتٍ، قَضَى النَّبِيُّ ﷺ: لِلِابْنَةِ النِّصْف، وَلِابْنَةِ الِابْنِ السُّدُس تَكْمِلَةَ الثُّلُثَيْنِ، وَمَا بَقِيَ فَلِلْأُخْتِ. رَوَاهُ الْبُخَارِيُّ.",
    });
  }
}

export default paternalSiblings;
