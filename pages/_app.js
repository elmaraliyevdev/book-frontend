import "../styles/globals.css";
import { Nav } from "../components/NavBar/Nav";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../store";

const theme = extendTheme({
  colors: {
    orange: "#fbc514",
    black: {
      900: "#050608",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
