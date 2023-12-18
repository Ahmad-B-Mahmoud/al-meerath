// Step Four Uncles & Cousins Check.
"use client";
import useStore from "@/store";

function step_05_Check() {
  // variables:
  const { goLastStep, setLastActiveStep } = useStore.getState();

  // Functions:
  setLastActiveStep(4);
  goLastStep();
}

export default step_05_Check;
