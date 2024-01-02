// Loading page
"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import LoadingGif from "@/public/images/loading1.gif";

function loading() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="glass-background"
      >
        <Image src={LoadingGif} width={300} alt="Loading Gif Icon" />
      </Box>
    </>
  );
}

export default loading;
