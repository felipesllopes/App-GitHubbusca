import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./src/Routes";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

const App: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
