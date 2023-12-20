import * as React from "react";
import { Chip, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import * as htmlToImage from "html-to-image";
import resetIssueStore from "@/utils/resetIssueStore";
import { useRouter } from "next/navigation";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function ResultActions() {
  // Variables:
  const router = useRouter();

  // Handlers:
  const handlePrint = () => {
    window.print();
  };

  const handleSavePng = () => {
    htmlToImage
      .toJpeg(document.getElementById("printable-content"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "نتيجة حلّ المسألة.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  const handleNewIssue = () => {
    resetIssueStore();
    router.push("/issue");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", mb: 5 }}>
      <Chip
        icon={<SaveIcon />}
        label="حفظ كصورة"
        color="primary"
        variant="outlined"
        onClick={handleSavePng}
      />
      <Chip
        icon={<PrintIcon />}
        label="طباعة"
        color="primary"
        variant="outlined"
        onClick={handlePrint}
      />
      <Chip
        icon={<CalculateIcon />}
        label="بدء مسألة جديدة"
        color="primary"
        variant="outlined"
        onClick={handleNewIssue}
      />
    </Box>
  );
}
