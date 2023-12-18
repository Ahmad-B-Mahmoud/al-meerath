// Sisters Solve:
import useStore from "@/store";

function sisters() {
  // Variables:
  const { sisters, brothers, amount, hasFemaleDescendants, addHeirsOfFard } =
    useStore.getState();

  if (sisters > 0 && brothers === 0 && !hasFemaleDescendants) {
    // Has only sisters without Brothers
    if (sisters == 1) {
      // Only One sisters
      addHeirsOfFard({
        title: "الأخوات الشقيقات",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 176.',
      });
    }

    if (sisters >= 2) {
      // Two or More sisters
      addHeirsOfFard({
        title: "الأخوات الشقيقات",
        count: sisters,
        cut: "الثلثين",
        stocks: 16,
        earn: (amount * 16) / 24,
        proof:
          'قالَ عزَّ و جلَّ: " ‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏‏‏ ‏‏‏ ‏‏‏‏ " سورة النساء آية رقم 176.',
      });
    }
  }
}

export default sisters;
