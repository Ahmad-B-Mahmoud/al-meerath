/** Reset Steps Button */
"use client";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import resetIssueStore from "@/utils/resetIssueStore";

function ResetStepsButton() {
  // Handlers
  const handleReset = () => {
    resetIssueStore();
  };

  return (
    <Button
      variant="outlined"
      onClick={handleReset}
      sx={{ mt: 1, mr: 1 }}
      startIcon={<RestartAltIcon />}
    >
      إعادة تعيين الحقول
    </Button>
  );
}

export default ResetStepsButton;
