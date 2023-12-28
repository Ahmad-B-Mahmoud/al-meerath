// The Main Section of the Reference Page:
"use client";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import HowTheAppWorks from "./HowTheAppWorks";
import NotesAboutTheApp from "./NotesAboutTheApp";
import UsedRef from "./UsedRef";

function Main() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="glass-background">
        <Box id="printable-content">
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ textShadow: "2px 2px #000", pt: 6 }}
          >
            عن التطبيق
          </Typography>
          <HowTheAppWorks />
          <NotesAboutTheApp />
          <UsedRef />
        </Box>
      </Container>
    </>
  );
}

export default Main;
