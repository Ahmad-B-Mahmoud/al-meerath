// A button to install the PWA app.
"use client";
import { useState, useEffect } from "react";
import { Button, Tooltip } from "@mui/material";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";

function InstallTheAppButton() {
  // Variables:
  const [isInstallable, setIsInstallable] = useState(true);
  const [installPrompt, setInstallPrompt] = useState();
  const [buttonLabel, setButtonLabel] = useState();

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setIsInstallable(false);
      setButtonLabel("تثبيت التطبيق");
    });
  }, []);

  // Handlers:
  const handleInstall = () => {
    if (!installPrompt) {
      setButtonLabel("المتصفح لا يدعم تثبيت التطبيق");
      return;
    }
    installPrompt.prompt();
    disableInAppInstallPrompt();
  };

  const disableInAppInstallPrompt = () => {
    setInstallPrompt(null);
    setIsInstallable(true);
    setButtonLabel("التطبيق مًثبّت");
  };
  return (
    <Tooltip title="تثبيت التطبيق على الجهاز بواسطة المتصفح الحالي.">
      <Button
        onClick={handleInstall}
        variant="contained"
        startIcon={<GetAppRoundedIcon />}
        disabled={isInstallable}
      >
        {buttonLabel}
      </Button>
    </Tooltip>
  );
}

export default InstallTheAppButton;
