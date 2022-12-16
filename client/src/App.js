import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
      </Container>
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
