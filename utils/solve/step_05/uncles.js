// uncles Solve:
import useStore from "@/store";

function uncles() {
  // Variables:
  const { uncles, stocksLeft, addHeirsOfConsanguinity, amount } =
    useStore.getState();

  if (uncles > 0) {
    addHeirsOfConsanguinity({
      title: "الأعمام الأشقاء",
      count: uncles,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default uncles;
