import "./index.css";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
const theme = createTheme();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <GoogleOAuthProvider clientId="936391522287-j7567phjrnvnarm5l1jtq3jbpn371eu9.apps.googleusercontent.com">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </GoogleOAuthProvider>
);
