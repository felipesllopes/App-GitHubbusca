import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Home } from "./src/Pages/Home";

const App: React.FunctionComponent = () => {
    return (
        <Container>
            <Home />
            <StatusBar />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
`;

export default App;
