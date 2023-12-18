// Step Three Ancestors Check.
"use client";
import useStore from "@/store";
import heirsOfFard from "../solve/step_03/heirsOfFard/heirsOfFard";

function step_03_Check() {
  // Variables:
  const {
    hasDescendants,
    sons,
    grandsons,
    greatgrandsons,
    father,
    grandfather,
    goNextStep,
    goLastStep,
    setLastActiveStep,
    creed,
  } = useStore.getState();

  // solve heirs of Fard:
  heirsOfFard();

  if (hasDescendants) {
    // Has Descendants Male and Females.
    if (sons > 0 || grandsons > 0 || greatgrandsons > 0) {
      // Has Male Descendants, Then Go to Last Step.
      setLastActiveStep(2);
      goLastStep();
    } else {
      // Has Female Descendants.
      if (father) {
        setLastActiveStep(2);
        goLastStep();
      } else {
        if (grandfather && creed === "الحنفي") {
          // Go Last Step.
          setLastActiveStep(2);
          goLastStep();
        } else {
          // Go Next Step.
          goNextStep();
        }
      }
    }
  } else {
    if (father) {
      // Then Go to Last Step.
      setLastActiveStep(2);
      goLastStep();
    } else {
      if (grandfather && creed === "الحنفي") {
        // Go Last Step.
        setLastActiveStep(2);
        goLastStep();
      } else {
        // Go Next Step.
        goNextStep();
      }
    }
  }
}

export default step_03_Check;
