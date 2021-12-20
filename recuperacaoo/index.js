import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from './style.js'; export default function Detalhes({ navigation, route }) {
    const { name, url, is_hidden, slot } = route.params;
    return (
        <View>
            <TouchableOpacity style={style.card}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Nome:</Text>
                    <Text>{name}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>url:</Text>
                    <Text>{url}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>habilidade:</Text>
                    <Text>{is_hidden}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>:</Text>
                    <Text>{slot}</Text>
                </View>
                <View>
                    <Text style = {style.img} style={{ fontWeight: 'bold' }}>Pokemon:</Text>
                    <Text>{front_default}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}