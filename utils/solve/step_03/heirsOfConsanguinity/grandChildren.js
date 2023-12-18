// Grand Children Solve:

import useStore from "@/store";

function grandChildren() {
  // Variables:
  const {
    grandsons,
    granddaughters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
  } = useStore.getState();

  if (grandsons > 0 && granddaughters > 0) {
    let allCount = parseInt(granddaughters) + parseInt(grandsons) * 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let grandsonsStocks = grandsons * (eachStock * 2);
    let granddaughtersStocks = granddaughters * eachStock;

    // Has Grandsons with Granddaughters
    addHeirsOfConsanguinity({
      title: "أبناء الأبناء",
      count: grandsons,
      stocks: grandsonsStocks,
      earn: (grandsonsStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
    addHeirsOfConsanguinity({
      title: "بنات الأبناء",
      count: granddaughters,
      stocks: granddaughtersStocks,
      earn: (granddaughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
  }

  if (grandsons > 0 && granddaughters == 0) {
    // Has Only grandSons
    addHeirsOfConsanguinity({
      title: "أبناء الأبناء",
      count: grandsons,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default grandChildren;
