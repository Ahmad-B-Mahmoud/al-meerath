// Father Solve:
import useStore from "@/store";

function father() {
  // Variables:
  const {
    father,
    hasDescendants,
    hasFemaleDescendants,
    addHeirsOfConsanguinity,
    stocksLeft,
    amount,
  } = useStore.getState();

  if (father) {
    if (!hasDescendants || hasFemaleDescendants) {
      addHeirsOfConsanguinity({
        title: "الأب",
        count: 1,
        stocks: stocksLeft,
        earn: (stocksLeft * amount) / 24,
        proof:
          "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
      });
    }
  }
}

export default father;
