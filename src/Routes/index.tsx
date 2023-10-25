import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";

const Stack = createNativeStackNavigator();

export const Routes: React.FunctionComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
