import React, { useEffect } from "react";

import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src/redux/store";

import "normalize.css";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";

import "aos/dist/aos.css";
import Aos from "aos";

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
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
