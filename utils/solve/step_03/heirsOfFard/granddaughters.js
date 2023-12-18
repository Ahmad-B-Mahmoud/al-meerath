// Granddaughters Solve:

import useStore from "@/store";

function granddaughters() {
  // Variables:
  const { granddaughters, grandsons, daughters, addHeirsOfFard, amount } =
    useStore.getState();

  if (granddaughters > 0 && grandsons == 0) {
    // Has only GrandDaughters without Grandsons
    if (granddaughters == 1 && daughters == 0) {
      // Only One grandDaughters
      addHeirsOfFard({
        title: "بنات الأبناء",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: " ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }

    if (granddaughters >= 2 && daughters == 0) {
      // Two or More Granddaughters
      addHeirsOfFard({
        title: "بنات الأبناء",
        count: granddaughters,
        cut: "الثلثين",
        stocks: 16,
        earn: (amount * 16) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }

    if (granddaughters > 0 && daughters == 1) {
      // Has Granddaughters with one Daughter
      addHeirsOfFard({
        title: "بنات الأبناء",
        count: granddaughters,
        cut: "السدس تكملة الثلثين نصيب الإناث",
        stocks: 4,
        earn: (amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }
  }
}

export default granddaughters;
