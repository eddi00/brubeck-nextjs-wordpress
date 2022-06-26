import React, { useEffect } from "react";
import Head from "next/head";

import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src/redux/store";

//import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
// import "../styles/gutenberg.css";
import "@wordpress/block-library/build-style/common.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import "aos/dist/aos.css";
import Aos from "aos";
import GlobalWrapper from "../src/components/GlobalWrapper/GlobalWrapper.component";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalWrapper>
            <Component {...pageProps} />
          </GlobalWrapper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
