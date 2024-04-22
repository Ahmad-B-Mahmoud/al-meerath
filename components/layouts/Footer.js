import * as React from "react";
import useStore from "@/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton, Tooltip } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Contact from "../forms/contact/Contact";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
      {"الميراث"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  // Variables:
  const openContactForm = useStore((state) => state.openContactForm);

  // Handlers:
  const handleContact = () => {
    openContactForm();
  };

  return (
    <>
      <Contact />
      <Box
        component="footer"
        sx={{
          pt: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm" className="glass-background">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body1" sx={{ pt: 2 }}>
                تم تطوير تطبيق الميراث بعوّن اللّه و توفيقه.
              </Typography>
              <Copyright />
            </Box>
            <Box
              sx={{ py: 2, display: "flex", justifyContent: "space-evenly" }}
            >
              <Tooltip title="فيس بوك">
                <IconButton aria-label="Facebook Link">
                  <FacebookTwoToneIcon color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="تواصل معنا">
                <IconButton onClick={handleContact} aria-label="E-mail Contact">
                  <EmailRoundedIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
