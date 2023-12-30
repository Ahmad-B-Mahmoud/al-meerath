"use client";
import { Button } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useRouter } from "next/navigation";

function NewIssueButton() {
  // Variables
  const router = useRouter();
  // Handlers
  const handleClick = () => {
    router.push("/issue");
  };
  return (
    <Button
      onClick={handleClick}
      startIcon={<CalculateIcon />}
      variant="contained"
      size="large"
    >
      البدء بحلّ مسألة مواريث
    </Button>
  );
}

export default NewIssueButton;
