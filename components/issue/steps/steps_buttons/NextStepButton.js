/** Go Next Step Button */
"use client";
import { Button } from "@mui/material";
import useStore from "@/store";
import NextPlanSharpIcon from "@mui/icons-material/NextPlanSharp";
import step_01_Check from "@/utils/stepCheckers/step_01_Check";
import step_02_Check from "@/utils/stepCheckers/step_02_Check";
import step_03_Check from "@/utils/stepCheckers/step_03_Check";
import step_04_Check from "@/utils/stepCheckers/step_04_Check";

function NextStepButton() {
  // Variables:
  const activeStep = useStore((state) => state.steps);

  // Handlers
  const handleNext = () => {
    if (activeStep === 0) {
      step_01_Check();
    }
    if (activeStep === 1) {
      step_02_Check();
    }
    if (activeStep === 2) {
      step_03_Check();
    }
    if (activeStep === 3) {
      step_04_Check();
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleNext}
      sx={{ mt: 1, mr: 1 }}
      startIcon={<NextPlanSharpIcon />}
    >
      الخطوة التالية
    </Button>
  );
}

export default NextStepButton;
