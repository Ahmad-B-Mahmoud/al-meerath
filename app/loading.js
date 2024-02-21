"use client";
import { Backdrop, Box } from "@mui/material";
import Image from "next/image";
import AppIcon from "@/public/images/icon.webp";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={AppIcon} width={300} alt="Al-Meerath App Logo." />
          <CircularProgress color="primary" />
        </Box>
      </Backdrop>
    </div>
  );
}
