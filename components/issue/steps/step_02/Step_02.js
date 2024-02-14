/** Step 02 Select the descendants: */
"use client";
import { Box, StepLabel, Typography, StepContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Sons from "./Sons";
import NextStepButton from "../steps_buttons/NextStepButton";
import PreviousStepButton from "../steps_buttons/PreviousStepButton";
import Daughters from "./Daughters";
import Grandsons from "./Grandsons";
import Granddaughters from "./Granddaughters";
import Greatgrandsons from "./Greatgrandsons";
import Greatgranddaughters from "./Greatgranddaughters";

function Step_02() {
  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الثانية: إختيار الفروع الأولاد و أولاد الأولاد.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} rowGap={1} my={2}>
            <Grid xs={6} sm={5}>
              <Sons />
            </Grid>
            <Grid xs={6} sm={5}>
              <Daughters />
            </Grid>
          </Grid>
          <Grid container spacing={4} rowGap={1} mb={2}>
            <Grid xs={6} sm={5}>
              <Grandsons />
            </Grid>
            <Grid xs={6} sm={5}>
              <Granddaughters />
            </Grid>
          </Grid>
          <Grid container spacing={4} rowGap={1} mb={2}>
            <Grid xs={6} sm={5}>
              <Greatgrandsons />
            </Grid>
            <Grid xs={6} sm={5}>
              <Greatgranddaughters />
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

export default Step_02;
