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
import backgroundImage from "@/public/images/bg.jpg";
import Image from "next/image";

// App Bar
import ResponsiveAppBar from "@/components/layouts/AppBar";

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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="الميراث" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#85624c" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFD700" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#85624c"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="الميراث" />
        <meta
          property="og:description"
          content="حلّ مسائل المواريث حسب أحكام الشريعة الإسلامية على المذهبين الحنفي و الشافعي."
        />
        <meta property="og:site_name" content="الميراث" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/icon.png" />
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
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
