// A button to install the PWA app.
"use client";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";

function InstallTheAppButton() {
  // Variables:
  const [isInstallable, setIsInstallable] = useState(false);
  const [installPrompt, setInstallPrompt] = useState();

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      if (!event) {
        return;
      } else {
        setIsInstallable(true);
      }
    });

    window.addEventListener("appinstalled", () => {
      disableInAppInstallPrompt();
    });
  }, []);

  // Handlers:
  const handleInstall = async () => {
    await installPrompt.prompt();
    disableInAppInstallPrompt();
  };

  const disableInAppInstallPrompt = () => {
    setInstallPrompt(null);
    setIsInstallable(false);
  };
  return (
    <>
      {isInstallable ? (
        <Button
          onClick={handleInstall}
          variant="contained"
          startIcon={<GetAppRoundedIcon />}
        >
          تثبيت التطبيق
        </Button>
      ) : null}
    </>
  );
}

export default InstallTheAppButton;
