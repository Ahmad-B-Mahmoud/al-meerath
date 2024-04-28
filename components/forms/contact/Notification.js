// Notification small dialog:
import useStore from "@/store";
import { Snackbar, Alert } from "@mui/material";

function Notification() {
  // Variables:
  const isNotificationDialogOpen = useStore(
    (state) => state.isNotificationDialogOpen
  );
  const notificationSeverity = useStore((state) => state.notificationSeverity);
  const notificationMessage = useStore((state) => state.notificationMessage);
  const resetNotificationDialog = useStore(
    (state) => state.resetNotificationDialog
  );

  // Handler:
  const handleClose = () => {
    resetNotificationDialog();
  };

  return (
    <Snackbar open={isNotificationDialogOpen} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={notificationSeverity}
        variant="outlined"
        sx={{ width: "100%" }}
      >
        {notificationMessage}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
