// cousins Solve:
import useStore from "@/store";

function cousins() {
  // Variables:
  const { cousins, stocksLeft, addHeirsOfConsanguinity, amount } =
    useStore.getState();

  if (cousins > 0) {
    addHeirsOfConsanguinity({
      title: "أبناء الأعمام الأشقاء",
      count: cousins,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default cousins;
