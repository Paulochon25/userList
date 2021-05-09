import React, {useEffect, useState} from "react";
import { Pressable, Alert, Modal, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function ({route, navigation}) {
    const { item } = route.params;
    console.log(item);
    return (
        <View>
            <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: '90%'}}>
                <Text style={{fontWidth: 300, color: 'gray'}}>{ item.name}</Text>
                <Text style={{fontSize: 14, fontWeight: 700, color: 'gray', paddingBottom: 5}}>{ item.username }</Text>
                <View style={{borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10}}/>
                <Text style={{fontSize: 14, fontWeight: 300, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Email : </span>{ item.email }</Text>
                <Text style={{fontSize: 14, fontWeight: 300, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Phone : </span>{ item.phone }</Text>
            </View>

            <h1 style={{fontSize: 20, fontWeight: 300, color: 'grey', paddingLeft: 25}}>Company</h1>

            <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: '90%'}}>
                <Text style={{fontWeight: 700, color: 'gray', fontSize: 16, paddingBottom: 10}}>{ item.company.name}</Text>
                <View style={{borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10}}/>
                <Text style={{fontWeight: 300, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Catch phrase :</span> { item.company.catchPhrase}</Text>
                <Text style={{fontWeight: 300, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>BS :</span> { item.company.bs}</Text>
                <Text style={{fontWeight: 300, color: 'gray'}}><span style={{color: '#34495E', fontWeight: 700}}>Website :</span> { item.website}</Text>
            </View>

            <h1 style={{fontSize: 20, fontWeight: 300, color: 'grey', paddingLeft: 25}}>Address</h1>

            <View style={{alignItems: 'left', borderWidth: 2, borderColor: 'gray', borderRadius: 20, margin: 20, padding: 10, width: '90%'}}>
                <Text style={{fontWeight: 700, color: 'gray', fontSize: 16}}>{ item.address.suite}</Text>
                <Text style={{fontWeight: 300, color: 'gray'}}>{item.address.street }, { item.address.city}</Text>

            </View>


        </View>

    )
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