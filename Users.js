import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const width = Dimensions.get('window').width;
const newWidth = width * 0.90;

class users extends Component {
    state = {
        post: {}
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setTimeout(() => {

                }, 1500);
                this.setState({post: result});
                console.log(result);
            })

    }
    render() {
        return (
            <div className="App">
                <View style={styles.container}>
                    <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: newWidth }}>
                        <p style={{fontWidth: 300, color: 'gray'}}>{ (this.state.post.name) ? this.state.post.name : <p>Chargement...</p> }</p>
                        <span style={{fontSize: 15, fontWeight: 300, color: 'gray'}}><span style={{color:'#2C3E50'}}>Username :</span> { this.state.post.username }</span>

                    </View>

                </View>

            </div>
        )
    }
}

export default users;

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
