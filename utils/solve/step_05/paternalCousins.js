// paternalCousins Solve:
import useStore from "@/store";

function paternalCousins() {
  // Variables:
  const { paternalCousins, stocksLeft, addHeirsOfConsanguinity, amount } =
    useStore.getState();

  if (paternalCousins > 0) {
    addHeirsOfConsanguinity({
      title: "أبناء الأعمام لأب",
      count: paternalCousins,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default paternalCousins;
