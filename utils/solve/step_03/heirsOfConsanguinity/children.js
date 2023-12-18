// Children Solve:

import useStore from "@/store";

function children() {
  // Variables:
  const { sons, daughters, stocksLeft, addHeirsOfConsanguinity, amount } =
    useStore.getState();

  if (sons > 0 && daughters > 0) {
    let allCount = parseInt(daughters) + parseInt(sons) * 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let sonsStocks = sons * (eachStock * 2);
    let daughtersStocks = daughters * eachStock;

    // Has Sons with Daughters
    addHeirsOfConsanguinity({
      title: "الأبناء",
      count: sons,
      stocks: sonsStocks,
      earn: (sonsStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
    addHeirsOfConsanguinity({
      title: "البنات",
      count: daughters,
      stocks: daughtersStocks,
      earn: (daughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
  }

  if (sons > 0 && daughters == 0) {
    // Has Only Sons
    addHeirsOfConsanguinity({
      title: "الأبناء",
      count: sons,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default children;
