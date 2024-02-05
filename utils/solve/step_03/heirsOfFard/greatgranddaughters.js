// Great-Granddaughters Solve:

import useStore from "@/store";

function greatgranddaughters() {
  // Variables:
  const {
    greatgranddaughters,
    greatgrandsons,
    daughters,
    granddaughters,
    addHeirsOfFard,
    amount,
  } = useStore.getState();

  if (greatgranddaughters > 0 && greatgrandsons == 0) {
    // Has only greatgranddaughters without greatgrandsons
    if (greatgranddaughters == 1 && daughters == 0 && granddaughters == 0) {
      // Only One greatgranddaughters
      addHeirsOfFard({
        title: "بنات أبناء الأبناء",
        count: 1,
        cut: "النصف",
        stocks: 12,
        earn: (amount * 12) / 24,
        proof:
          'قالَ عزَّ و جلَّ: " ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }

    if (greatgranddaughters >= 2 && daughters == 0 && granddaughters == 0) {
      // Two or More greatgranddaughters
      addHeirsOfFard({
        title: "بنات أبناء الأبناء",
        count: greatgranddaughters,
        cut: "الثلثين",
        stocks: 16,
        earn: (amount * 16) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }

    if (granddaughters > 0 && daughters + granddaughters == 1) {
      // Has GrandGranddaughters with one Daughter or Granddaughter
      addHeirsOfFard({
        title: "بنات أبناء الأبناء",
        count: greatgranddaughters,
        cut: "السدس تكملة الثلثين نصيب الإناث",
        stocks: 4,
        earn: (amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.',
      });
    }
  }
}

export default greatgranddaughters;
