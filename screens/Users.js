import React, {useEffect, useState} from "react";
import { Pressable, Alert, Modal, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import {FlatList} from "react-native-gesture-handler";

export default function ({ navigation }) {

    const goTo = () => navigation.navigate("Home");
    const [user, setUser] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((response) => setUser(response))
            .catch((error => {
                console.log(error);
            }));
    });



    return (
        <View style={styles.container}>
            <FlatList
                data={user}
                renderItem={({item}) =>

                    <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: '90%'}}>
                            <Text style={{fontWidth: 300, color: 'gray'}}>{ item.id } - { item.name}</Text>
                            <Text style={{fontSize: 14, fontWeight: 700, color: 'gray', paddingBottom: 5}}>{ item.username }</Text>
                            <View style={{borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10}}/>
                        <Text style={{fontSize: 14, fontWeight: 400, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Email : </span>{ item.email }</Text>
                        <Text style={{fontSize: 14, fontWeight: 400, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Phone : </span>{ item.phone }</Text>
                        <TouchableOpacity onPress={(test) => navigation.navigate({ name: 'Details', params: { item: item}})} style={styles.detailsButton}>
                            <Text style={{color: '#FFF'}}>En savoir plus ></Text>
                        </TouchableOpacity>
                    </View>
            }/>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "azure",
        alignItems: "center",
        justifyContent: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    detailsButton: {
        borderWidth: 2,
        borderColor: '#34495E',
        backgroundColor: '#34495E',
        width: '55%',
        borderRadius: 30,
        paddingLeft: 10, paddingRight: 10,
        paddingTop: 5, paddingBottom: 5,
        marginTop: 15
    }
});