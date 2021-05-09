import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import TextInput from "react-native-web/dist/exports/TextInput";
import AsyncStorage from "@react-native-community/async-storage";

export default function ({ navigation }) {
    const [token, setToken] = useState(null);
    const [text, onChangeText] = React.useState("");

    const connexion = async() => {
        try {
            await AsyncStorage.setItem('token', text);
            console.log('token set');
            navigation.navigate('Users');
        } catch(e) {
            console.log('Error : ' + e);
        }
    };

    const checkToken = async() => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                navigation.navigate('Users');
                console.log('Connected successfully');
            }
        return (token)
        } catch (error) {
            console.log('Not connected ! ' + error );
        }
    };

    checkToken();

    useEffect(() => {
        checkToken().then((res) => {
            onChangeText(res)
        }).catch(err => console.log(err))
    });

    // const goTo = () => navigation.navigate("Users");


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: '#34495E'}}>Connexion</Text>
            <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, borderColor:'#34495E', paddingLeft: 20}}
                onChangeText={onChangeText}
                value={text}
                placeholder = "Type your username"

            />
            <TouchableOpacity
                style={{alignItems: 'center', height: 40, paddingLeft: 40, paddingRight: 40, backgroundColor: '#34495E', padding: 10}}
                onPress={connexion}
            >
                <Text style={{color: '#FFFFFF'}}>Log In</Text>
            </TouchableOpacity>
        </View>
        // <View style={styles.container}>
        //     <Text>Home screen</Text>
        //     <Button onPress={goTo} title={`Go to Details`} />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "azure",
        alignItems: "center",
        justifyContent: "center",
    },
});