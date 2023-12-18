// Husband Solve:

import useStore from "@/store";

function husband() {
  // Variables:
  const { husband, hasDescendants, addHeirsOfFard, amount } =
    useStore.getState();

  if (husband) {
    if (hasDescendants) {
      addHeirsOfFard({
        title: "الزوج",
        count: 1,
        cut: "الربع",
        stocks: 6,
        earn: (amount * 6) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 12.',
      });
    } else {
      // Has no Descendants:
      addHeirsOfFard({
        title: "الزوج",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 12.',
      });
    }
  }
}

export default husband;
