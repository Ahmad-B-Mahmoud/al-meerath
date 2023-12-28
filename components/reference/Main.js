// The Main Section of the Reference Page:
"use client";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import Header from "./Header";
import ProofSection from "./ProofSection";
import TermsSection from "./TermsSection";
import RestrictionsSection from "./RestrictionsSection";
import HeirsSection from "./HeirsSection";

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
            دليل علم المواريث
          </Typography>
          <Header />
          <ProofSection />
          <TermsSection />
          <RestrictionsSection />
          <HeirsSection />
        </Box>
      </Container>
    </>
  );
}

export default Main;
