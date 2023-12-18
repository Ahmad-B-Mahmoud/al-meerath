/** Heirs of Fard in Step03 */
import useStore from "@/store";
import daughters from "./daughters";
import father from "./father";
import granddaughters from "./granddaughters";
import grandfather from "./grandfather";
import grandmothers from "./grandmothers";
import greatgranddaughters from "./greatgranddaughters";
import husband from "./husband";
import mother from "./mother";
import wifes from "./wifes";
import specialCaseMotherWithFatherAndPartner from "./specialCaseMotherWithFatherAndPartner";

function heirsOfFard() {
  // Store State Variables:
  const { gender } = useStore.getState();

  /** -- Heirs of Fard: -- */
  /** - Partners: - */
  if (gender === "male") {
    /** Wifes: */
    wifes();
  } else {
    // Female:
    /** Husband: */
    husband();
  } // End of Partners.

  /** Daughters: */
  daughters();

  /** Granddaughters: */
  granddaughters();

  /** Greatgranddaughters: */
  greatgranddaughters();

  /** Father: */
  father();

  /** Grandfather: */
  grandfather();

  /** Mother: */
  mother();

  /** Grandmothers: */
  grandmothers();

  /** Special Case Mother With Father And Partner: */
  specialCaseMotherWithFatherAndPartner();

  /** End Heirs of fard. */
}

export default heirsOfFard;
