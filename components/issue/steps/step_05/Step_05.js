/** Step 04 Select the Siblings: */
"use client";
import { Box, StepLabel, Typography, StepContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NextStepButton from "../steps_buttons/NextStepButton";
import PreviousStepButton from "../steps_buttons/PreviousStepButton";
import Nephews from "./Nephews";
import PaternalNephews from "./PaternalNephew";
import Uncles from "./Uncles";
import Cousins from "./Cousins";
import PaternalUncles from "./PaternalUncles";
import PaternalCousins from "./PaternalCousins";

function Step_05() {
  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الخامسة: إختيار أبناء الإخوة و الأعمام و أبناء الأعمام.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} rowGap={1} my={2}>
            <Grid sm={5}>
              <Nephews />
            </Grid>
            <Grid sm={5}>
              <PaternalNephews />
            </Grid>
          </Grid>
          <Grid container spacing={4} rowGap={1} mb={2}>
            <Grid sm={5}>
              <Uncles />
            </Grid>
            <Grid sm={5}>
              <Cousins />
            </Grid>
          </Grid>
          <Grid container spacing={4} rowGap={1} mb={2}>
            <Grid sm={5}>
              <PaternalUncles />
            </Grid>
            <Grid sm={5}>
              <PaternalCousins />
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

export default Step_05;
