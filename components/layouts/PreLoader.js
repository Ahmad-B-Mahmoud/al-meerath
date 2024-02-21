// This a Pre-Loader for the app:
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AppIcon from "@/public/images/icon.webp";

function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="loading-screen"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#3D2D1C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={AppIcon} width={300} alt="Al-Meerath App Logo." />
        </div>
      ) : null}
    </>
  );
}

export default PreLoader;
