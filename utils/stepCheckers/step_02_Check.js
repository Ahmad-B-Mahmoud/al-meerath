// Step Two Descendants Check.
"use client";
import useStore from "@/store";

function step_02_Check() {
  const {
    sons,
    grandsons,
    greatgrandsons,
    daughters,
    granddaughters,
    greatgranddaughters,
    setHasDescendants,
    setHasMaleDescendants,
    setHasFemaleDescendants,
    goNextStep,
  } = useStore.getState();

  // Check for Descendants:
  sons > 0 ||
  grandsons > 0 ||
  greatgrandsons > 0 ||
  daughters > 0 ||
  granddaughters > 0 ||
  greatgranddaughters > 0
    ? setHasDescendants()
    : null;

  // Check for only Male Descendants:
  (sons > 0 || grandsons > 0 || greatgrandsons > 0) &&
  daughters === 0 &&
  granddaughters === 0 &&
  greatgranddaughters === 0
    ? setHasMaleDescendants()
    : null;

  // Check for only female Descendants:
  sons === 0 &&
  grandsons === 0 &&
  greatgrandsons === 0 &&
  (daughters > 0 || granddaughters > 0 || greatgranddaughters > 0)
    ? setHasFemaleDescendants()
    : null;

  goNextStep();
}

export default step_02_Check;
