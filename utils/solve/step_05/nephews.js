// Nephews Solve:
import useStore from "@/store";

function nephews() {
  // Variables:
  const { nephews, stocksLeft, addHeirsOfConsanguinity } = useStore.getState();

  if (nephews > 0) {
    addHeirsOfConsanguinity({
      title: "أبناء الأخوة الأشقاء",
      count: nephews,
      stocks: stocksLeft,
      earn: (stocksLeft * amount) / 24,
      proof:
        "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
    });
  }
}

export default nephews;
