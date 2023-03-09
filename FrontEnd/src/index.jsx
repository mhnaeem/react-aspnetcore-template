import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import {createRoot} from "react-dom/client";
import ErrorScreen from "./components/ErrorScreen";
import SignInScreen from "./components/SignInScreen";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorScreen />
    },
    {
        path: "sign-in",
        element: <SignInScreen />
    }
]);

const theme = createTheme({
    palette: {
        primary: {
            main: '#E33E7F'
        }
    }
});

createRoot(document.getElementById("main-content")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme} >
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
