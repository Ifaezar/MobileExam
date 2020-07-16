import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Icon } from "native-base";
import Button from "../Button/Button"
import AsyncStorage from "@react-native-community/async-storage"
import { useDispatch, useSelector } from 'react-redux'

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: height * (314 / 812),
        alignItems: "center",
        justifyContent: "center"
    },
})

export default () => {
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const userSelector = useSelector(state => state.user)

    const loginHandler = () => {
        AsyncStorage.setItem("userData", JSON.stringify({ username }))
            .then((res) => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: { username }
                })
            })
            .catch((err) => {
                console.log()
            })
    }

    return (
        <View style={styles.container}>
            <Text>Tomato APP</Text>
            <Icon type="MaterialCommunityIcons" name="food-fork-drink"></Icon>
            <TextInput
                onChangeText={(text) => setUsername(text)}
                placeholder="Username"></TextInput>
            <Button onPress={loginHandler} size="lg">ENTER</Button>
        </View>
    )
}