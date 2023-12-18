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
}));

export default useStore;
