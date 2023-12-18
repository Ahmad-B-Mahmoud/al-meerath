import children from "./children";
import father from "./father";
import grandChildren from "./grandChildren";
import grandfather from "./grandfather";
import greatgrandChildren from "./greatgrandChildren";
import specialChildrenCase from "./specialChildrenCase";

function heirsOfConsanguinity_03() {
  /** -- Heirs of Consanguinity: -- */
  /** Children: */
  children();

  /** Grand Children: */
  grandChildren();

  /** Great Grand Children: */
  greatgrandChildren();

  /** Special Children Cases: */
  specialChildrenCase();

  /** Father: */
  father();

  /** Grandfather: */
  grandfather();
}

export default heirsOfConsanguinity_03;
