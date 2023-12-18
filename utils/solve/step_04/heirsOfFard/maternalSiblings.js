// maternal Siblings Solve:
import useStore from "@/store";

function maternalSiblings() {
  // Variables:
  const { maternalSiblings, addHeirsOfFard, amount } = useStore.getState();

  if (maternalSiblings == 1) {
    addHeirsOfFard({
      title: "الأخوة لأم",
      count: 1,
      cut: "السدس",
      stocks: 4,
      earn: (amount * 4) / 24,
      proof:
        "قالَ عزَّ و جلَّ: ‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ سورة النساء آية رقم 12.",
    });
  }
  if (maternalSiblings > 1) {
    addHeirsOfFard({
      title: "الأخوة لأم",
      count: maternalSiblings,
      cut: "الثلث",
      stocks: 8,
      earn: (amount * 8) / 24,
      proof:
        "قالَ عزَّ و جلَّ: ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏ ‏‏‏‏‏ سورة النساء آية رقم 12.",
    });
  }
}

export default maternalSiblings;
