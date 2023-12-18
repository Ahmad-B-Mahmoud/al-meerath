// Step Four Siblings Check.
"use client";
import useStore from "@/store";
import heirsOfFard from "../solve/step_04/heirsOfFard/heirsOfFard";

function step_04_Check() {
  // Variables:
  const {
    brothers,
    paternalBrothers,
    grandfather,
    goNextStep,
    goLastStep,
    setLastActiveStep,
  } = useStore.getState();

  // solve heirs of Fard:
  heirsOfFard();

  if (brothers > 0 || paternalBrothers > 0 || grandfather) {
    // Then Go to Last Step.
    setLastActiveStep(3);
    goLastStep();
  } else {
    goNextStep();
  }
}

export default step_04_Check;
