// paternal Sisters Solve:

import useStore from "@/store";

function paternalSisters() {
  // Variables:
  const {
    paternalSisters,
    paternalBrothers,
    sisters,
    addHeirsOfFard,
    amount,
    hasFemaleDescendants,
  } = useStore.getState();

  if (paternalSisters > 0 && paternalBrothers == 0 && !hasFemaleDescendants) {
    // Has only paternalSisters without paternalBrothers
    if (paternalSisters == 1 && sisters == 0) {
      // Only One paternalSisters
      addHeirsOfFard({
        title: "الأخوات لأب",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 176.',
      });
    }

    if (paternalSisters >= 2 && sisters == 0) {
      // Two or More paternalSisters
      addHeirsOfFard({
        title: "الأخوات لأب",
        count: paternalSisters,
        cut: "الثلثين",
        stocks: 16,
        earn: (amount * 16) / 24,
        proof:
          'قالَ عزَّ و جلَّ: " ‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏‏‏ ‏‏‏ ‏‏‏‏ " سورة النساء آية رقم 176.',
      });
    }

    if (paternalSisters > 0 && sisters == 1) {
      // Has paternalSisters with one Sisters
      addHeirsOfFard({
        title: "الأخوات لأب",
        count: paternalSisters,
        cut: "السدس تكملة الثلثين نصيب الإناث",
        stocks: 4,
        earn: (amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }
  }
}

export default paternalSisters;
