/** This is Zustand Main Store for the hole application :*/
import { create } from "zustand";
import { steps } from "./slices/issue/steps";
// Step_01
import { gender } from "./slices/issue/step_01/gender";
import { amount } from "./slices/issue/step_01/amount";
import { creed } from "./slices/issue/step_01/creed";

const useStore = create((set) => ({
  // Steps Slice:
  ...steps(set),

  /** Steps Slices: */
  // Step_01:
  ...gender(set),
  ...amount(set),
  ...creed(set),
}));

export default useStore;
