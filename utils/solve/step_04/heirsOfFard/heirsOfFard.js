/** Heirs of Fard in Step04 */

import maternalSiblings from "./maternalSiblings";
import paternalSisters from "./paternalSisters";
import sisters from "./sisters";
import specialCaseSiblingsWithMotherAndHusband from "./specialCaseSiblingsWithMotherAndHusband.js";

function heirsOfFard() {
  /** -- Heirs of Fard: -- */
  /** Sisters: */
  sisters();

  /** paternal Sisters: */
  paternalSisters();

  /** maternal Siblings: */
  maternalSiblings();

  /** special Case Siblings With Mother And Husband: */
  specialCaseSiblingsWithMotherAndHusband();
}

export default heirsOfFard;
