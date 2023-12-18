// Step Four heirs Of Consanguinity:

import paternalSiblings from "./paternalSiblings";
import siblings from "./siblings";
import specialCaseGrandfatherWithPaternalSiblings from "./specialCaseGrandfatherWithPaternalSiblings";
import specialCaseGrandfatherWithSiblings from "./specialCaseGrandfatherWithSiblings";

function heirsOfConsanguinity_04() {
  /** --- Heirs of Consanguinity: --- */
  /** Siblings: */
  siblings();

  /** paternal Siblings: */
  paternalSiblings();
  // Special Cases:
  specialCaseGrandfatherWithSiblings();
  specialCaseGrandfatherWithPaternalSiblings();
}

export default heirsOfConsanguinity_04;
