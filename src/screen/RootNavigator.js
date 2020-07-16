import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import HomeStack from "../navigator/HomeStack";
import MainTab from "../navigator/MainTab";

const Stack = createStackNavigator()



export default () => {
    const userSelector = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem("userData")
            .then((username) => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: JSON.parse(username)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    userSelector.username ? (
                        <Stack.Screen name="MainTab" component={MainTab} />
                    ) : (
                            <Stack.Screen name="Login" component={LoginScreen} />
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}