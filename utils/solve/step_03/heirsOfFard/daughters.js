// Daughters Solve:

import useStore from "@/store";

function daughters() {
  // Variables:
  const { daughters, sons, amount, addHeirsOfFard } = useStore.getState();

  if (daughters > 0 && sons === 0) {
    // Has only Daughters without Sons
    if (daughters == 1) {
      // Only One Daughters
      addHeirsOfFard({
        title: "البنات",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: " ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }

    if (daughters >= 2) {
      // Two or More Daughters
      addHeirsOfFard({
        title: "البنات",
        count: daughters,
        cut: "الثلثين",
        stocks: 16,
        earn: (amount * 16) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }
  }
}

export default daughters;
