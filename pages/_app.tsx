import { customTheme, darkTheme, lightTheme } from "@/themes/";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import type { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";

interface Props extends AppProps {
  theme: string;
}

type currentTheme = {
  [key: string]: Theme;
};

export default function App({ Component, pageProps }: Props) {
  const [theme, setTheme] = useState("light");

  const currentTheme: currentTheme = {
    light: lightTheme,
    dark: darkTheme,
    custom: customTheme,
  };

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    setTheme(cookieTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme[theme]}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const theme = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies.theme
//     : "light";
//   const validThemes = ["light", "dark", "custom"];
//   return {
//     theme: validThemes.includes(theme) ? theme : "light",
//   };
// };
