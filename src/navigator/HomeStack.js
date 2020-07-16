import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import CardDataDetail from "../screen/CardDataDetail";
const Stack = createStackNavigator();

export default () =>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home"/>
        <Stack.Screen component={CardDataDetail} name="CardDetail"/>
        </Stack.Navigator>

    )
}