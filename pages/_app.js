import "styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "utils/theme";
import LayoutWrapper from "layouts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
