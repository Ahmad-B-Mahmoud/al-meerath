/** Check if there are two or more of siblings when there is no descendants to declare the Mother cut. */
"use client";
import useStore from "@/store";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

function HasSiblingsDialog() {
  // Variables:
  const gender = useStore((state) => state.gender);
  const setHasSiblings = useStore((state) => state.setHasSiblings);
  const hasSiblingsDialog = useStore((state) => state.hasSiblingsDialog);
  const setHasSiblingsDialog = useStore((state) => state.setHasSiblingsDialog);

  // Handlers:
  const handleYes = () => {
    setHasSiblings(true);
    setHasSiblingsDialog(false);
  };
  const handleNo = () => {
    setHasSiblings(false);
    setHasSiblingsDialog(false);
  };

  return (
    <Dialog open={hasSiblingsDialog} disableEscapeKeyDown={true}>
      <DialogTitle>
        <InfoSharpIcon fontSize="inherit" color="primary" /> تأكيد وجود إخوة
      </DialogTitle>
      <DialogContent>
        <Typography variant="body">
          هل يوجد إثنين أو أكثر من الإخوة{" "}
          {gender === "male" ? "للمتوفّى" : "للمتوفّاة"} ؟
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleYes} endIcon={<CheckIcon />}>
          نعم
        </Button>
        <Button onClick={handleNo} endIcon={<CancelIcon />}>
          لا
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default HasSiblingsDialog;
