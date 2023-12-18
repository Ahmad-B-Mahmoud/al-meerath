// Grandmothers Solve:

import useStore from "@/store";

function grandmothers() {
  // Variables:
  const {
    fatherSideGrandmother,
    motherSideGrandmother,
    addHeirsOfFard,
    amount,
  } = useStore.getState();

  if (fatherSideGrandmother && motherSideGrandmother) {
    // There are both Grandmas
    addHeirsOfFard({
      title: "الجدّات",
      count: 2,
      cut: "السدس",
      stocks: 4,
      earn: (amount * 4) / 24,
      proof:
        'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
    });
  }
  if (fatherSideGrandmother && !motherSideGrandmother) {
    // There is only GrandmotherFatherSide
    addHeirsOfFard({
      title: "الجدّة من ناحية الأب",
      count: 1,
      cut: "السدس",
      stocks: 4,
      earn: (amount * 4) / 24,
      proof:
        'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
    });
  }
  if (!fatherSideGrandmother && motherSideGrandmother) {
    // There is only GrandmotherFatherSide
    addHeirsOfFard({
      title: "الجدّة من ناحية الأم",
      count: 1,
      cut: "السدس",
      stocks: 4,
      earn: (amount * 4) / 24,
      proof:
        'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
    });
  }
}

export default grandmothers;
