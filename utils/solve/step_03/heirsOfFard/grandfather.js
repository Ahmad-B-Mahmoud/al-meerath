// Grandfather Solve:

import useStore from "@/store";

function grandfather() {
  // Variables:
  const { father, grandfather, hasDescendants, addHeirsOfFard, amount } =
    useStore.getState();

  if (!father) {
    if (grandfather) {
      if (hasDescendants) {
        addHeirsOfFard({
          title: "الجَدّ",
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
}

export default grandfather;
