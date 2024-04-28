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
          label={`قيمة التركة ${amount}`}
          icon={<PaidRoundedIcon />}
          variant="outlined"
        />
      </Grid>
      <Grid>
        <Chip
          label={`المذهب الفقهي ${creed}`}
          icon={<AssistantDirectionRoundedIcon />}
          variant="outlined"
        />
      </Grid>
      <Grid>
        <Chip
          label={`نوع المسألة ${issueType}`}
          icon={<SquareFootIcon />}
          variant="outlined"
        />
      </Grid>
      <Grid>
        <Chip
          label={`أصل المسألة ${
            issueType === "عائلة" || issueType === "رديّة" ? allStocks : 24
          }`}
          icon={<PieChartIcon />}
          variant="outlined"
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
