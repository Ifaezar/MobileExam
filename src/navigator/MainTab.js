import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import { Icon } from "native-base";
import LogOutScreen from "../screen/LogOutScreen";
const Tab = createBottomTabNavigator()

export default () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: () => <Icon type="Entypo" name="home"/>
            }}/>
             <Tab.Screen name="LogOut" component={LogOutScreen} options={{
                tabBarIcon: () => <Icon type="AntDesign" name="logout"/>
            }}/>
        </Tab.Navigator>
    )
}