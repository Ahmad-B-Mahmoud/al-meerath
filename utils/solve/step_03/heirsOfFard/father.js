// Father Solve:

import useStore from "@/store";

function father() {
  // Variables:
  const { father, hasDescendants, addHeirsOfFard, amount } =
    useStore.getState();

  if (father) {
    if (hasDescendants) {
      addHeirsOfFard({
        title: "الأب",
        count: 1,
        cut: "السدس",
        stocks: 4,
        earn: (amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
      });
    }
  }
}

export default father;
