// A button to install the PWA app.
"use client";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";

function InstallTheAppButton() {
  // Variables:
  const [isInstallable, setIsInstallable] = useState(true);
  const [installPrompt, setInstallPrompt] = useState();
  const [buttonLabel, setButtonLabel] = useState("التطبيق مُثبّت");

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      if (!installPrompt) {
        setButtonLabel("المتصفح لا يدعم تثبيت التطبيق");
        return;
      }
      setIsInstallable(false);
      setButtonLabel("تثبيت التطبيق");
    });
  }, []);

  // Handlers:
  const handleInstall = () => {
    installPrompt.prompt();

    // Wait for the user's choice
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        setButtonLabel("التطبيق مًثبّت");
      }
    });
    disableInAppInstallPrompt();
  };

  const disableInAppInstallPrompt = () => {
    setInstallPrompt(null);
    setIsInstallable(true);
  };
  return (
    <Button
      onClick={handleInstall}
      variant="contained"
      startIcon={<GetAppRoundedIcon />}
      disabled={isInstallable}
    >
      {buttonLabel}
    </Button>
  );
}

export default InstallTheAppButton;
