"use client";
import * as React from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import * as htmlToImage from "html-to-image";
import resetIssueStore from "@/utils/resetIssueStore";
import { useRouter } from "next/navigation";
import CalculateIcon from "@mui/icons-material/Calculate";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import useStore from "@/store";
import ReportProblem from "@/components/forms/reportProblem/ReportProblem";

export default function ResultActions({ printableContent }) {
  // Variables:
  const router = useRouter();
  const [saveBtnLoading, setSaveBtnLoading] = React.useState(false);
  const [printBtnLoading, setPrintBtnLoading] = React.useState(false);
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

  const handlePrint = () => {
    setPrintBtnLoading(true);
    window.print();
    setPrintBtnLoading(false);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Grid>
          <LoadingButton
            onClick={handleSavePng}
            loading={saveBtnLoading}
            loadingPosition="start"
            variant="outlined"
            startIcon={<SaveIcon />}
          >
            حفظ كصورة
          </LoadingButton>
        </Grid>
        <Grid>
          <LoadingButton
            onClick={handlePrint}
            loading={printBtnLoading}
            loadingPosition="start"
            variant="outlined"
            startIcon={<PrintIcon />}
          >
            طباعة
          </LoadingButton>
        </Grid>
        <Grid>
          <LoadingButton
            onClick={handleNewIssue}
            loading={newBtnLoading}
            loadingPosition="start"
            variant="outlined"
            startIcon={<CalculateIcon />}
          >
            بدء مسألة جديدة
          </LoadingButton>
        </Grid>
        <Grid>
          <Button
            onClick={handleReportProblem}
            variant="outlined"
            startIcon={<AnnouncementIcon />}
          >
            إبلاغ عن خطأ في حلّ المسألة
          </Button>
        </Grid>
      </Grid>
      <ReportProblem />
    </>
  );
}
