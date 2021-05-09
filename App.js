// In App.js in a new project

import * as React from 'react';
import {TouchableOpacity, View, Text, Dimensions, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextInput from "react-native-web/dist/exports/TextInput";
import Root from "./Root";

// function UsersScreen() {
//
//     return (
//
//
//         <View style={styles.container}>
//             <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: 40 }}>
//                 {/*<p style={{fontWidth: 300, color: 'gray'}}>{ (this.state.post.name) ? this.state.post.name : <p>Chargement...</p> }</p>*/}
//                 {/*<span style={{fontSize: 15, fontWeight: 300, color: 'gray'}}><span style={{color:'#2C3E50'}}>Username :</span> { this.state.post.username }</span>*/}
//
//             </View>
//
//         </View>
//     );
// }
// const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Root/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight: 300,
        fontColor: '#a23',
    }
});

export default App;