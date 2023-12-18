/** Go Previous Step Button.  */
"use client";
import { Button } from "@mui/material";
import useStore from "@/store";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";

function PreviousStepButton() {
  // Variables:
  const goPreviousStep = useStore((state) => state.goPreviousStep);
  const activeStep = useStore((state) => state.steps);

  return (
    <Button
      variant="outlined"
      disabled={activeStep === 0}
      onClick={goPreviousStep}
      sx={{ mt: 1, mr: 1 }}
      endIcon={<ArrowBackIosNewSharpIcon />}
    >
      رجوع للخطوة السابقة
    </Button>
  );
}

export default PreviousStepButton;
