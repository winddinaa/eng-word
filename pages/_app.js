import "styles/globals.css";
import { ThemeProvider } from "@mui/material";

//component
import LayoutWrapper from "layouts";

//utils
import { theme } from "utils/theme";

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
