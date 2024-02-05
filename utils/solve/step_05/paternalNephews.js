// Paternal Nephews Solve:
import useStore from "@/store";

function paternalNephews() {
  // Variables:
  const { paternalNephews, stocksLeft, addHeirsOfConsanguinity, amount } =
    useStore.getState();

  if (paternalNephews > 0) {
    addHeirsOfConsanguinity({
      title: "أبناء الأخوة لأب",
      count: paternalNephews,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default paternalNephews;
