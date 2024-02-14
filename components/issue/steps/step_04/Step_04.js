/** Step 04 Select the Siblings: */
"use client";
import { Box, StepLabel, Typography, StepContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NextStepButton from "../steps_buttons/NextStepButton";
import PreviousStepButton from "../steps_buttons/PreviousStepButton";
import Brothers from "./Brothers";
import Sisters from "./Sisters";
import PaternalBrothers from "./PaternalBrothers";
import PaternalSisters from "./PaternalSisters";
import MaternalSiblings from "./MaternalSiblings";

function Step_04() {
  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الرابعة: إختيار الإخوة الأشقاء و لأب و لأم.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} rowGap={1} my={2}>
            <Grid xs={6} sm={5}>
              <Brothers />
            </Grid>
            <Grid xs={6} sm={5}>
              <Sisters />
            </Grid>
          </Grid>
          <Grid container spacing={4} rowGap={1} mb={1}>
            <Grid xs={6} sm={5}>
              <PaternalBrothers />
            </Grid>
            <Grid xs={6} sm={5}>
              <PaternalSisters />
            </Grid>
            <Grid sm={5}>
              <MaternalSiblings />
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

export default Step_04;
