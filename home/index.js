import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {

    const [lista, setlista] = useState([
        {
            "name": "pokemon",
            "url": "https://pokeapi.co/api/v2/pokemon/0/"
        }
    ])

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon/", {
            "method": "GET",
            "headers": {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setlista(data);
        });
    }, [lista]);

    return(
        <View style={style.pag}>

        <StatusBar style="menu" />

        {lista.map((item, index) =>

            <TouchableOpacity style={style.menu} key={index} onPress={() => { navigation.navigate('Detalhes', item) }}>
                <Text>name: {item.name}</Text>
                <Text>url: {item.url}</Text>
            </TouchableOpacity>
        )}
        </View>
    );
}