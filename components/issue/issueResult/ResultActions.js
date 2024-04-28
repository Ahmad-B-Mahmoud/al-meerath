"use client";
import * as React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import * as htmlToImage from "html-to-image";
import resetIssueStore from "@/utils/resetIssueStore";
import { useRouter } from "next/navigation";
import CalculateIcon from "@mui/icons-material/Calculate";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import useStore from "@/store";
import ReportProblem from "@/components/forms/reportProblem/ReportProblem";

export default function ResultActions() {
  // Variables:
  const router = useRouter();
  const [saveBtnLoading, setSaveBtnLoading] = React.useState(false);
  const [newBtnLoading, setNewBtnLoading] = React.useState(false);
  const openReportForm = useStore((state) => state.openReportForm);

  // Handlers:
  const handleReportProblem = () => {
    openReportForm();
  };

  const handleSavePng = () => {
    setSaveBtnLoading(true);
    htmlToImage
      .toJpeg(document.getElementById("printable-content"), {
        quality: 1,
        backgroundColor: "#3D2D1C",
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "نتيجة حلّ المسألة.jpeg";
        link.href = dataUrl;
        link.click();
        setSaveBtnLoading(false);
      });
  };

  const handleNewIssue = () => {
    setNewBtnLoading(true);
    resetIssueStore();
    router.push("/issue");
    setNewBtnLoading(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", paddingTop: 5 }}>
        <ButtonGroup variant="contained" aria-label="Result button Group tool.">
          <LoadingButton
            onClick={handleSavePng}
            loading={saveBtnLoading}
            loadingPosition="start"
            variant="text"
            startIcon={<SaveIcon />}
            size="small"
          >
            حفظ كصورة
          </LoadingButton>
          <Button
            onClick={handleReportProblem}
            variant="text"
            startIcon={<AnnouncementIcon />}
            size="small"
          >
            إبلاغ عن خطأ في حلّ المسألة
          </Button>
          <LoadingButton
            onClick={handleNewIssue}
            loading={newBtnLoading}
            loadingPosition="start"
            variant="text"
            startIcon={<CalculateIcon />}
            size="small"
          >
            بدء مسألة جديدة
          </LoadingButton>
        </ButtonGroup>
      </Box>
      <ReportProblem />
    </>
  );
}
