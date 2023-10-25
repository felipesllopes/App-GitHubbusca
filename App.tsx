import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./src/Routes";
import { StatusBar } from "react-native";

const App: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <Routes />
        </NavigationContainer>
    );
};

export default App;
