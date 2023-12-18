// Siblings Solve:

import useStore from "@/store";

function siblings() {
  // Variables:
  const {
    brothers,
    sisters,
    stocksLeft,
    addHeirsOfConsanguinity,
    amount,
    hasFemaleDescendants,
  } = useStore.getState();

  if (brothers > 0 && sisters > 0) {
    let allCount = parseInt(sisters) + parseInt(brothers) * 2;
    let eachStock = parseInt(stocksLeft) / allCount;
    let brothersStocks = brothers * (eachStock * 2);
    let sistersStocks = sisters * eachStock;

    // Has brothers with sisters
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
  }

  if (brothers > 0 && sisters == 0) {
    // Has Only brothers
    addHeirsOfConsanguinity({
      title: "الأخوة الأشقاء",
      count: brothers,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }

  if (brothers === 0 && hasFemaleDescendants && sisters > 0) {
    // There is Sisters With no Brothers with Fard Female Descendants:
    addHeirsOfConsanguinity({
      title: "الأخوات الشقيقات",
      count: sisters,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "وَعَنِ ابْنِ مَسْعُودٍ  فِي بِنْتٍ، وَبِنْتِ ابْنٍ، وَأُخْتٍ، قَضَى النَّبِيُّ ﷺ: لِلِابْنَةِ النِّصْف، وَلِابْنَةِ الِابْنِ السُّدُس تَكْمِلَةَ الثُّلُثَيْنِ، وَمَا بَقِيَ فَلِلْأُخْتِ. رَوَاهُ الْبُخَارِيُّ.",
    });
  }
}

export default siblings;
