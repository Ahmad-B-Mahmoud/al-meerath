/** step 01: General Info */
"use client";
import { Box, StepLabel, Typography, StepContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Gender from "./Gender";
import Amount from "./Amount";
import Creed from "./Creed";
import NextStepButton from "../steps_buttons/NextStepButton";
import PreviousStepButton from "../steps_buttons/PreviousStepButton";

function Step_01() {
  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الأولى: عن صاحب الإرث.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} rowGap={1} my={2}>
            <Grid>
              <Gender />
            </Grid>
            <Grid>
              <Creed />
            </Grid>
            <Grid sm={7}>
              <Amount />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <div>
            <NextStepButton />
            <PreviousStepButton />
          </div>
        </Box>
      </StepContent>
    </>
  );
}

export default Step_01;
