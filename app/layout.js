"use client";
// Global Style:
import "./globals.css";
// Font
import { Noto_Naskh_Arabic } from "next/font/google";
// Mui & Next js Integrations:
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
// Mui Theme:
import { createTheme, ThemeProvider } from "@mui/material/styles";
// RTL Support:
import { arSA } from "@mui/material/locale";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import CssBaseline from "@mui/material/CssBaseline";

// App Background image
import backgroundImage from "@/public/images/bg.webp";
import Image from "next/image";

// App Bar
import ResponsiveAppBar from "@/components/layouts/AppBar";

// Pre-Loader for the App:
import PreLoader from "@/components/layouts/PreLoader";

// App Footer:
import Footer from "@/components/layouts/Footer";

const notoFont = Noto_Naskh_Arabic({ subsets: ["arabic"] });

const theme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#FFD700",
        light: "#FFE833",
        dark: "#C7A500",
      },
    },
    direction: "rtl",
    typography: {
      fontFamily: "inherit",
    },
  },
  arSA
);

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Style the background image div:
const styles = {
  container: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: -1, // optional, to make sure the image is behind other elements
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="application-name" content="الميراث" />
        <meta name="theme-color" content="#FFD700" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="/images/icons/apple-touch-icon.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="الميراث" />
        <meta
          property="og:description"
          content="حساب التركات حسب الشريعة الإسلامية على المذهبين الحنفي و الشافعي."
        />
        <meta property="og:site_name" content="الميراث" />
        <meta property="og:url" content="https://al-meerath.vercel.app" />
        <meta
          property="og:image"
          content="https://al-meerath.vercel.app/images/icons/apple-touch-icon.png"
        />
      </head>
      <body className={notoFont.className}>
        <AppRouterCacheProvider>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div style={styles.container}>
                <Image
                  src={backgroundImage}
                  style={{ objectFit: "cover" }}
                  fill
                  alt="background"
                />
              </div>
              <ResponsiveAppBar />
              {children}
              <Footer />
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
        <PreLoader />
      </body>
    </html>
  );
}
