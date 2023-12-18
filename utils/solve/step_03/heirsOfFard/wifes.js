// Wifes Solve:

import useStore from "@/store";

function wifes() {
  // Variables:
  const { wifes, hasDescendants, addHeirsOfFard, amount } = useStore.getState();

  if (wifes > 0) {
    if (hasDescendants) {
      addHeirsOfFard({
        title: "الزوجات",
        count: wifes,
        cut: "الثمن",
        stocks: 3,
        earn: (amount * 3) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏‏ ‏" سورة النساء آية رقم 12.',
      });
    } else {
      // Has no Descendants:
      addHeirsOfFard({
        title: "الزوجات",
        count: wifes,
        cut: "الربع",
        stocks: 6,
        earn: (amount * 6) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 12.',
      });
    }
  }
}

export default wifes;
