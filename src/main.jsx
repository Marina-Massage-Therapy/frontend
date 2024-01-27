import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
// const initialLanguage = i18n.language || "en"; // get initial language from i18n directly
// import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <ChakraProvider> */}
        <App />
        {/* </ChakraProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// Create a Material-UI theme
