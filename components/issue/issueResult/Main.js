"use client";
import HeirsOfFard from "./HeirsOfFard";
import { Container, Box, Typography } from "@mui/material";
import Info from "./Info";
import HeirsOfConsanguinity from "./HeirsOfConsanguinity";
import ResultActions from "./ResultActions";

function Main() {
  return (
    <>
      <Container maxWidth="lg" className="glass-background">
        <ResultActions />
        <Box id="printable-content">
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ textShadow: "2px 2px #000", pt: 6 }}
          >
            نتيجة حلّ المسألة
          </Typography>
          <Info />
          <HeirsOfFard />
          <HeirsOfConsanguinity />
        </Box>
      </Container>
    </>
  );
}

export default Main;
