// Special Case Daughters Granddaughters with GreatGrandSons with GreatGranddaughters:

import useStore from "@/store";

function specialChildrenCase() {
  // Variavles:
  const {
    daughters,
    granddaughters,
    greatgrandsons,
    greatgranddaughters,
    addHeirsOfConsanguinity,
    editHeirsOfConsanguinity,
    amount,
    stocksLeft,
  } = useStore.getState();

  if (
    daughters >= 2 &&
    granddaughters > 0 &&
    greatgrandsons > 0 &&
    greatgranddaughters > 0
  ) {
    let allCount =
      parseInt(greatgranddaughters) +
      parseInt(greatgrandsons) * 2 +
      parseInt(granddaughters);
    let eachStock = parseInt(stocksLeft) / allCount;
    let greatgrandsonsStocks = greatgrandsons * (eachStock * 2);
    let greatgranddaughtersStocks = greatgranddaughters * eachStock;
    let granddaughtersStocks = granddaughters * eachStock;

    // Remove Default Selection:
    editHeirsOfConsanguinity("أبناء أبناء الأبناء");
    // Add The New value:
    addHeirsOfConsanguinity({
      title: "أبناء أبناء الأبناء",
      count: greatgrandsons,
      stocks: greatgrandsonsStocks,
      earn: (greatgrandsonsStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });

    // Remove Default Selection:
    editHeirsOfConsanguinity("بنات أبناء الأبناء");
    // Add The New value:
    addHeirsOfConsanguinity({
      title: "بنات أبناء الأبناء",
      count: greatgranddaughters,
      stocks: greatgranddaughtersStocks,
      earn: (greatgranddaughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
    addHeirsOfConsanguinity({
      title: "بنات الأبناء",
      count: granddaughters,
      stocks: granddaughtersStocks,
      earn: (granddaughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
  }

  if (
    daughters >= 2 &&
    granddaughters > 0 &&
    greatgrandsons > 0 &&
    greatgranddaughters === 0
  ) {
    let allCount = parseInt(greatgrandsons) * 2 + parseInt(granddaughters);
    let eachStock = parseInt(stocksLeft) / allCount;
    let greatgrandsonsStocks = greatgrandsons * (eachStock * 2);
    let granddaughtersStocks = granddaughters * eachStock;

    // Remove Default Selection:
    editHeirsOfConsanguinity("أبناء أبناء الأبناء");
    // Add The New value:
    addHeirsOfConsanguinity({
      title: "أبناء أبناء الأبناء",
      count: greatgrandsons,
      stocks: greatgrandsonsStocks,
      earn: (greatgrandsonsStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
    addHeirsOfConsanguinity({
      title: "بنات الأبناء",
      count: granddaughters,
      stocks: granddaughtersStocks,
      earn: (granddaughtersStocks * amount) / 24,
      proof:
        'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
    });
  }
}

export default specialChildrenCase;
