// This form is for Contact via Email:
import useStore from "@/store";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FullName from "./FullName";
import Email from "./Email";
import BodyText from "./BodyText";
import Notification from "./Notification";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Contact() {
  // Variables:
  const contactForm = useStore((state) => state.contactForm);
  const closeContactForm = useStore((state) => state.closeContactForm);
  const fullName = useStore((state) => state.fullName);
  const email = useStore((state) => state.email);
  const bodyText = useStore((state) => state.bodyText);
  const resetContactFormData = useStore((state) => state.resetContactFormData);
  const api = process.env.Contact_Form_API;
  const captchaKey = process.env.HCaptcha_Site_Key;
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
        "شكراً لتواصلك معنا سيتم الردّ على رسالتك في أقرب وقت إنشاء اللّه."
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
    closeContactForm();
  };

  return (
    <Dialog
      open={contactForm}
      onClose={handleClose}
      className="glass-background"
    >
      <DialogTitle
        color="primary"
        sx={{
          textShadow: "2px 2px #000",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        <EmailRoundedIcon color="primary" sx={{ mr: 2, fontSize: "inherit" }} />
        تواصل معنا
      </DialogTitle>
      <DialogContent>
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

export default Contact;
