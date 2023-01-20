import "styles/globals.css";
import { Provider } from "react-redux";

import { store } from "redux/store";

import { ThemeProvider } from "@mui/material";

//component
import LayoutWrapper from "layouts";

//utils
import { theme } from "utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
