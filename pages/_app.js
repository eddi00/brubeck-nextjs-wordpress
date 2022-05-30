import "normalize.css";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
