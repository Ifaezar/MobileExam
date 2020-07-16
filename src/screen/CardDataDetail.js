import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";


const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        alignItems: "flex-start"
    },
})

export default (props) => {
    const { RestaurantCardDetail } = props.route.params

    return (
        <View style={styles.container}>
            <Text>{RestaurantCardDetail.restaurantName}</Text>
            <Image source={{ uri: RestaurantCardDetail.image }} style={{ width: width - 50, height: width - 50 }} />
            <Text>Rating : {RestaurantCardDetail.rating} </Text>
            <Text>Address : {RestaurantCardDetail.address}</Text>
            <Text>Cuisines : {RestaurantCardDetail.cuisine}</Text>
            <Text>Open : {RestaurantCardDetail.openTime} AM to {RestaurantCardDetail.closeTime} PM</Text>
            <Text>Cost for 2 : {RestaurantCardDetail.costForTwo}</Text>
        </View>
    )
}

