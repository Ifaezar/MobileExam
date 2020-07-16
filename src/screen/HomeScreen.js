import React, { useEffect, useState } from "react";
import Button from "../Button/Button"
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet, Dimensions, TextInput, FlatList } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import Axios from "axios";
import { API_URL } from '../constants/API'
import CardData from "./CardData";

const Stack = createStackNavigator()

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        alignItems: "flex-end",
    },
})

export default ({ navigation }) => {
    const userSelector = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        getUsername()
        getRestaurant()
    }, [])

    const getUsername = () => {
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
    }

    const getRestaurant = () => {
        Axios.get(`${API_URL}/restaurants`)
            .then((res) => {
                setRestaurantsList(res.data.result)
                console.log(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderRestaurants = ({ item }) => {
        return <CardData navigation={navigation} data={item} />
    }

    return (
        <View >
            <View style={styles.container}>
                <Text>Hello, {userSelector.username}</Text>
                
                    <FlatList
                        contentContainerStyle={{ marginTop: 46 }}
                        data={restaurantsList}
                        renderItem={renderRestaurants}
                        keyExtractor={(item) => item.id.toString()}
                    />
              

            </View>
        </View>
    )
}