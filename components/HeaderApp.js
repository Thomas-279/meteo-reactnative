import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements"

export default function HeaderApp() {
    return (
        <View>
            <Header
                centerComponent={{ text: "Meteo Widget", style: {color: '#FFFFFF'} }}
                containerStyle={{
                    justifyContent: 'space-around',
                    backgroundColor: '#272848',
                }}
            />
        </View>
    )
}