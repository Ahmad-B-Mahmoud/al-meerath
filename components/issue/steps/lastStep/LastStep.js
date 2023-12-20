/** Last Step Confirmation and Ready To solve. */
"use client";
import { Box, StepLabel, Typography, StepContent, Button } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import useStore from "@/store";
import solve from "@/utils/solve/solve";
import { useRouter } from "next/navigation";
import calculateAllStocks from "@/utils/solve/calculateAllStocks";
import calculateStocksLeft from "@/utils/solve/calculateStocksLeft";
import ResetStepsButton from "../steps_buttons/ResetStepsButton";

function LastStep() {
  // Variables:
  const goLastActiveStep = useStore((state) => state.goLastActiveStep);
  const router = useRouter();

  // Handlers:
  const handleSolve = () => {
    // handle solve
    calculateAllStocks();
    calculateStocksLeft();
    solve(router);
  };
  const handleBack = () => {
    // handle Back
    goLastActiveStep();
  };

  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الأخيرة: تأكيد حلّ المسألة.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">
            المسألة الآن أصبحت جاهزة للحل تمّ إختيار جميع الورثة الغير محجوبين.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <div>
            <Button
              onClick={handleSolve}
              startIcon={<CalculateIcon />}
              variant="contained"
              sx={{ mt: 1, mr: 1 }}
            >
              حلّ المسألة الآن
            </Button>
            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
              endIcon={<ArrowBackIosNewSharpIcon />}
            >
              رجوع للخطوة السابقة
            </Button>
            <ResetStepsButton />
          </div>
        </Box>
      </StepContent>
    </>
  );
}

export default LastStep;
