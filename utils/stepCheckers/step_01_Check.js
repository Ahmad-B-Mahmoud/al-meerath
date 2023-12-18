// Step One About Check.
"use client";
import useStore from "@/store";

function step_01_Check() {
  // Variables:
  const { amount, setError, goNextStep } = useStore.getState();

  amount === 0 || "" ? setError(true) : goNextStep();
}
export default step_01_Check;
