import React from "react";
import Button from "../Button/Button"
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import {useDispatch} from "react-redux"
import AsyncStorage from "@react-native-community/async-storage";

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: height * (314 / 812),
        alignItems: "center",
        justifyContent: "center"
    },
})
export default () =>{

    const dispatch = useDispatch()

    const LogOutHandler = () =>{
        AsyncStorage.removeItem("userData")
        .then((result) =>{
            dispatch({
                type:"USER_LOGOUT"
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    return(
        <View style={styles.container}>
            <Button onPress={LogOutHandler} size="lg">Log Out</Button>
        </View>
    )
}