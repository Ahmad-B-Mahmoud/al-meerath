// Solve the Issue.

import useStore from "@/store";
import heirsOfConsanguinity_03 from "./step_03/heirsOfConsanguinity/heirsOfConsanguinity";
import heirsOfConsanguinity_04 from "./step_04/heirsOfConsanguinity/heirsOfConsanguinity";
import heirsOfConsanguinity_05 from "./step_05/heirsOfConsanguinity";

function solve(router) {
  // Variables:
  const { lastActiveStep } = useStore.getState();

  /** Check for Last Active Step: */
  // Step Three:
  if (lastActiveStep === 2) {
    heirsOfConsanguinity_03();
    router.push("/issue/result");
  }

  // Step Four:
  if (lastActiveStep === 3) {
    heirsOfConsanguinity_04();
    router.push("/issue/result");
  }

  // Step Five:
  if (lastActiveStep === 4) {
    heirsOfConsanguinity_05();
    router.push("/issue/result");
  }
}

export default solve;
