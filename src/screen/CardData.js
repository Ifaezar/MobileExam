import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";

const { width } = Dimensions.get("screen")


export default ({ navigation, data }) => {
    return (
        <View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("CardDetail", {RestaurantCardDetail : data})}>
                    <Image source={{ uri: data.image }} style={{ width: width - 50, height: width - 50 }} />
                    <Text style={{ color: "black" }}>Rating = {data.rating}</Text>
                    <Text style={{ color: "black" }}>Restaurant Name = {data.restaurantName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}