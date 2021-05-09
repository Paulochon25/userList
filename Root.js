import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Alert, Modal, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Home from "./screens/Home";
import Users from "./screens/Users";
import Details from "./screens/Details";

const Stack = createStackNavigator();



export default function Root() {
    const disconnect = async() => {
        try {
            await AsyncStorage.removeItem('token');
            console.log('token removed');
            alert('Please refresh the application to be disconnected.')
        } catch(e) {
            console.log('disconnection malfunctionning : ' + e);
        }
    };
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Users" component={Users} options={{headerLeft: null, headerRight: () => (
                <Button
                    title="Disconnect"
                    color='#34495E'
                    onPress={disconnect}
                />
                )}}/>
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}