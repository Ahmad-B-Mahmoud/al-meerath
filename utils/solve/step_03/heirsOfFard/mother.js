// Mother Solve:

import useStore from "@/store";

function mother() {
  // Variables:
  const { mother, hasDescendants, addHeirsOfFard, hasSiblings, amount } =
    useStore.getState();

  if (mother) {
    if (hasDescendants) {
      addHeirsOfFard({
        title: "الأم",
        count: 1,
        cut: "السدس",
        stocks: 4,
        earn: (amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
      });
    } else {
      // Without Descendants:
      if (hasSiblings) {
        addHeirsOfFard({
          title: "الأم",
          count: 1,
          cut: "السدس",
          stocks: 4,
          earn: (amount * 4) / 24,
          proof:
            'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11.',
        });
      } else {
        // No Siblings:
        addHeirsOfFard({
          title: "الأم",
          count: 1,
          cut: "الثلث",
          stocks: 8,
          earn: (amount * 8) / 24,
          proof:
            'قالَ عزَّ و جلَّ: " ‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
        });
      }
    }
  }
}

export default mother;
