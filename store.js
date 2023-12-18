/** This is Zustand Main Store for the hole application :*/
import { create } from "zustand";
import { steps } from "./slices/issue/steps";
// Step_01
import { gender } from "./slices/issue/step_01/gender";
import { amount } from "./slices/issue/step_01/amount";
import { creed } from "./slices/issue/step_01/creed";
// Step_02
import { sons } from "./slices/issue/step_02/sons";
import { daughters } from "./slices/issue/step_02/daughters";
import { grandsons } from "./slices/issue/step_02/grandsons";
import { granddaughters } from "./slices/issue/step_02/granddaughters";
import { greatgrandsons } from "./slices/issue/step_02/greatgrandsons";
import { greatgranddaughters } from "./slices/issue/step_02/greatgranddaughters";
import { generalStepTwo } from "./slices/issue/step_02/general";
// Step_03
import { father } from "./slices/issue/step_03/father";
import { mother } from "./slices/issue/step_03/mother";
import { grandfather } from "./slices/issue/step_03/grandfather";
import { fatherSideGrandmother } from "./slices/issue/step_03/fatherSideGrandmother";
import { motherSideGrandmother } from "./slices/issue/step_03/motherSideGrandmother";
import { wifes } from "./slices/issue/step_03/wifes";
import { husband } from "./slices/issue/step_03/husband";
import { generalStepThree } from "./slices/issue/step_03/general";
// Step_04
import { brothers } from "./slices/issue/step_04/brothers";
import { sisters } from "./slices/issue/step_04/sisters";
import { paternalBrothers } from "./slices/issue/step_04/paternalBrothers";
import { paternalSisters } from "./slices/issue/step_04/paternalSisters";
import { maternalSiblings } from "./slices/issue/step_04/maternalSiblings";
// Step_05
import { nephews } from "./slices/issue/step_05/nephews";
import { uncles } from "./slices/issue/step_05/uncles";
import { cousins } from "./slices/issue/step_05/cousins";
import { paternalUncles } from "./slices/issue/step_05/paternalUncles";
import { paternalCousins } from "./slices/issue/step_05/paternalCousins";
// Result Slice:
import { resultSlice } from "./slices/issue/result";

const useStore = create((set) => ({
  // Steps Slice:
  ...steps(set),

  /** Steps Slices: */
  // Step_01:
  ...gender(set),
  ...amount(set),
  ...creed(set),

  // Step_02:
  ...sons(set),
  ...daughters(set),
  ...grandsons(set),
  ...granddaughters(set),
  ...greatgrandsons(set),
  ...greatgranddaughters(set),
  ...generalStepTwo(set),

  // Step_03:
  ...father(set),
  ...mother(set),
  ...grandfather(set),
  ...fatherSideGrandmother(set),
  ...motherSideGrandmother(set),
  ...wifes(set),
  ...husband(set),
  ...generalStepThree(set),

  // Step_04:
  ...brothers(set),
  ...sisters(set),
  ...paternalBrothers(set),
  ...paternalSisters(set),
  ...maternalSiblings(set),

  // Step_05:
  ...nephews(set),
  ...uncles(set),
  ...cousins(set),
  ...paternalUncles(set),
  ...paternalCousins(set),

  // Result :
  ...resultSlice(set),
}));

export default useStore;
