"use client";
import useStore from "@/store";
import Grid from "@mui/material/Unstable_Grid2";
import { Chip, Alert, AlertTitle } from "@mui/material";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssistantDirectionRoundedIcon from "@mui/icons-material/AssistantDirectionRounded";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

function Info() {
  // Store State Variables:
  const amount = useStore((state) => state.amount);
  const creed = useStore((state) => state.creed);
  const issueType = useStore((state) => state.issueType);
  const issueNote = useStore((state) => state.issueNote);
  const allStocks = useStore((state) => state.allStocks);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      rowGap={1}
      columnGap={4}
      my={3}
    >
      <Grid>
        <Chip
          color="primary"
          label={`قيمة التركة ${amount}`}
          icon={<PaidRoundedIcon />}
        />
      </Grid>
      <Grid>
        <Chip
          color="primary"
          label={`المذهب الفقهي ${creed}`}
          icon={<AssistantDirectionRoundedIcon />}
        />
      </Grid>
      <Grid>
        <Chip
          color="primary"
          label={`نوع المسألة ${issueType}`}
          icon={<SquareFootIcon />}
        />
      </Grid>
      <Grid>
        <Chip
          color="primary"
          label={`أصل المسألة ${
            issueType === "عائلة" || issueType === "رديّة" ? allStocks : 24
          }`}
          icon={<PieChartIcon />}
        />
      </Grid>
      {issueNote != "" ? (
        <Grid>
          <Alert severity="info" className="glass-background">
            <AlertTitle>ملاحظة عن المسألة:</AlertTitle>
            {issueNote}
          </Alert>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default Info;
