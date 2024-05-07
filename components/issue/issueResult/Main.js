"use client";
import HeirsOfFard from "./HeirsOfFard";
import { Container, Box, Typography } from "@mui/material";
import Info from "./Info";
import HeirsOfConsanguinity from "./HeirsOfConsanguinity";
import ResultActions from "./ResultActions";

function Main() {
  return (
    <>
      <Container maxWidth="lg" className="glass-background" sx={{ py: 6 }}>
        <Box id="printable-content" sx={{ px: 1 }}>
          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ textShadow: "2px 2px #000" }}
          >
            نتيجة حلّ المسألة
          </Typography>
          <Info />
          <HeirsOfFard />
          <HeirsOfConsanguinity />
        </Box>
        <ResultActions />
      </Container>
    </>
  );
}

export default Main;
