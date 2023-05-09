import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainContainer from "./MainContainer";

import WeightScreen from "./screens/Weight";
import ProgramsScreen from "./screens/Food";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    
    return (

        <Stack.Navigator initialRouteName="Root">
            <Stack.Screen
                name="Root"
                component={MainContainer}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="WeightScreen"
                component={WeightScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProgramsScren"
                component={ProgramsScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default Navigation;