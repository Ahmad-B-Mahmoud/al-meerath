// This form is for Report a problem in solving an issue:
import useStore from "@/store";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import Notification from "../contact/Notification";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import FullName from "../contact/FullName";
import Email from "../contact/Email";
import BodyText from "../contact/BodyText";

function ReportProblem() {
  // Variables:
  const reportForm = useStore((state) => state.reportForm);
  const fullName = useStore((state) => state.fullName);
  const email = useStore((state) => state.email);
  const bodyText = useStore((state) => state.bodyText);
  const gender = useStore((state) => state.gender);
  const amount = useStore((state) => state.amount);
  const creed = useStore((state) => state.creed);
  const heirsOfFard = useStore((state) => state.heirsOfFard);
  const heirsOfConsanguinity = useStore((state) => state.heirsOfConsanguinity);
  const closeReportForm = useStore((state) => state.closeReportForm);
  const resetContactFormData = useStore((state) => state.resetContactFormData);
  const api = process.env.NEXT_PUBLIC_Contact_Form_API;
  const captchaKey = process.env.NEXT_PUBLIC_HCaptcha_Site_Key;
  const [token, setToken] = useState("");
  const setIsNotificationDialogOpen = useStore(
    (state) => state.setIsNotificationDialogOpen
  );
  const setNotificationSeverity = useStore(
    (state) => state.setNotificationSeverity
  );
  const setNotificationMessage = useStore(
    (state) => state.setNotificationMessage
  );

  // Handlers:
  const onVerify = (token) => {
    setToken(token);
  };

  const handleSend = async () => {
    if (fullName === "" || email === "" || bodyText === "") {
      // notify:
      setIsNotificationDialogOpen();
      setNotificationSeverity("error");
      setNotificationMessage("يُرجى ملء الحقول أعلاه.");
      return;
    }

    if (token === "" || token === null || token === undefined) {
      // notify:
      setIsNotificationDialogOpen();
      setNotificationSeverity("error");
      setNotificationMessage("يٌرجى ملء حقل أنا لست روبوت.");
      return;
    }
    const formData = {
      fullName: fullName,
      email: email,
      bodyText: bodyText,
      gender,
      amount,
      creed,
      heirsOfFard: JSON.stringify({ heirsOfFard }),
      heirsOfConsanguinity: JSON.stringify({ heirsOfConsanguinity }),
      "h-captcha-response": token,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apikey: api,
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      // Handle success
      setIsNotificationDialogOpen();
      setNotificationSeverity("success");
      setNotificationMessage(
        "شكراً لتواصلك معنا سيتم حلّ المشكلة في أقرب وقت إنشاء اللّه."
      );
    } else {
      // Handle error
      setIsNotificationDialogOpen();
      setNotificationSeverity("error");
      setNotificationMessage(
        "عذراً لقد حدث خطأ بإرسال رسالتك يٌرجى إعادة المحاولة من فضلك."
      );
    }

    resetContactFormData();
  };
  const handleClose = () => {
    closeReportForm();
  };

  return (
    <Dialog
      open={reportForm}
      onClose={handleClose}
      className="glass-background"
      PaperProps={{
        className: "no-background",
      }}
    >
      <DialogTitle
        color="primary"
        sx={{
          textShadow: "2px 2px #000",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        <AnnouncementIcon color="primary" sx={{ mr: 2, fontSize: "inherit" }} />
        إبلاغ عن خطأ في حلّ المسألة
      </DialogTitle>
      <DialogContent>
        <Alert variant="outlined" severity="info" sx={{ my: 2.5 }}>
          سوف يتم إرسال بيانات الورثة للمطّور من فضلك يُرجى كتابة أين هو الخطأ
          في الحلّ.
        </Alert>

        <Grid container spacing={2} rowGap={1} my={1}>
          <Grid sm={5}>
            <FullName />
          </Grid>
          <Grid sm={7}>
            <Email />
          </Grid>
          <Grid sm={12} xs={12}>
            <BodyText />
          </Grid>
        </Grid>
        <HCaptcha
          sitekey={captchaKey}
          onVerify={onVerify}
          theme="dark"
          languageOverride="ar"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          startIcon={<SendRoundedIcon />}
          onClick={handleSend}
        >
          إرسال
        </Button>
        <Button
          variant="outlined"
          startIcon={<CancelRoundedIcon />}
          onClick={handleClose}
        >
          إلغاء
        </Button>
      </DialogActions>
      <Notification />
    </Dialog>
  );
}

export default ReportProblem;
