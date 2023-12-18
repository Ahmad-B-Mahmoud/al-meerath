/** Step 03 Select the Parents and Partners: */
"use client";
import { Box, StepLabel, Typography, StepContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Father from "./Father";
import Mother from "./Mother";
import Grandfather from "./Grandfather";
import FatherSideGrandmother from "./FatherSideGrandmother";
import MotherSideGrandmother from "./MotherSideGrandmother.js";
import useStore from "@/store";
import Husband from "./Husband";
import Wifes from "./Wifes";
import HasSiblingsDialog from "./HasSiblingsDialog";
import { useEffect } from "react";
import NextStepButton from "../steps_buttons/NextStepButton";
import PreviousStepButton from "../steps_buttons/PreviousStepButton";

function Step_03() {
  // Variables:
  const gender = useStore((state) => state.gender);
  const hasDescendants = useStore((state) => state.hasDescendants);
  const mother = useStore((state) => state.mother);
  const setHasSiblingsDialog = useStore((state) => state.setHasSiblingsDialog);

  // Handlers:
  useEffect(() => {
    if (!hasDescendants && mother) {
      setHasSiblingsDialog(true);
    }
  }, [mother]);

  return (
    <>
      <StepLabel>
        <Typography variant="subtitle1">
          الخطوة الثالثة: إختيار الأصول الآباء و الأزواج.
        </Typography>
      </StepLabel>
      <StepContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            rowGap={1}
            columnGap={4}
            my={2}
          >
            <Grid>
              <Father />
            </Grid>
            <Grid>
              <Mother />
            </Grid>
            {gender === "female" ? (
              <Grid>
                <Husband />
              </Grid>
            ) : (
              <Grid>
                <Wifes />
              </Grid>
            )}
            <Grid>
              <Grandfather />
            </Grid>
            <Grid>
              <MotherSideGrandmother />
            </Grid>
            <Grid>
              <FatherSideGrandmother />
            </Grid>
          </Grid>
        </Box>
        {!hasDescendants && mother ? <HasSiblingsDialog /> : null}
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

export default Step_03;
