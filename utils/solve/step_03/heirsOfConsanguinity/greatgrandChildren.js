// Great Grand Children Solve:

import useStore from "@/store";

function greatgrandChildren() {
  // Variables:
  const {
    greatgrandsons,
    greatgranddaughters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
  } = useStore.getState();

  if (greatgrandsons > 0 && greatgranddaughters > 0) {
    let allCount = parseInt(greatgranddaughters) + parseInt(greatgrandsons) * 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let greatgrandsonsStocks = greatgrandsons * (eachStock * 2);
    let greatgranddaughtersStocks = greatgranddaughters * eachStock;

    // Has Greatgrandsons with Granddaughters
    addHeirsOfConsanguinity({
      title: "أبناء أبناء الأبناء",
      count: greatgrandsons,
      stocks: greatgrandsonsStocks,
      earn: (greatgrandsonsStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
    addHeirsOfConsanguinity({
      title: "بنات أبناء الأبناء",
      count: greatgranddaughters,
      stocks: greatgranddaughtersStocks,
      earn: (greatgranddaughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
  }

  if (greatgrandsons > 0 && greatgranddaughters == 0) {
    // Has Only Greatgrandsons
    addHeirsOfConsanguinity({
      title: "أبناء أبناء الأبناء",
      count: greatgrandsons,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default greatgrandChildren;
