/** This is the Main Step to solve the Issue */
"use client";
import {
  Container,
  Box,
  Stepper,
  Step,
  Typography,
  Divider,
} from "@mui/material";
import useStore from "@/store";
import Step_01 from "./step_01/Step_01";
import Step_02 from "./step_02/Step_02";
import Step_03 from "./step_03/Step_03";
import Step_04 from "./step_04/Step_04";
import Step_05 from "./step_05/Step_05";
import LastStep from "./lastStep/LastStep";

function MainStep() {
  // Variables:
  const activeStep = useStore((state) => state.steps);
  return (
    <>
      <Container maxWidth="sm" className="glass-background">
        <Box>
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            pt={3}
            sx={{ textShadow: "2px 2px #000" }}
          >
            مسألة مواريث جديدة
          </Typography>
          <Typography variant="h6" gutterBottom>
            سيتم إختيار الوارثين من أصحاب الفروض و العصبات على شكل خطوات بحسب
            قربهم و صلتهم بالمتوفى.
          </Typography>
          <Divider sx={{ marginBottom: 4 }} />
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <Step_01 />
            </Step>
            <Step>
              <Step_02 />
            </Step>
            <Step>
              <Step_03 />
            </Step>
            <Step>
              <Step_04 />
            </Step>
            <Step>
              <Step_05 />
            </Step>
            <Step>
              <LastStep />
            </Step>
          </Stepper>
        </Box>
      </Container>
    </>
  );
}

export default MainStep;
