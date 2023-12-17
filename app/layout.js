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

const notoFont = Noto_Naskh_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "الميراث",
  description: "حساب التركات حسب الشريعة الإسلامية.",
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <CacheProvider value={cacheRtl}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
