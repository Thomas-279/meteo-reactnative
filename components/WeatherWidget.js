import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WeatherWidget({ city, zipcode }) {
    const [temperature, setTemperature] = useState();
    const [icon, setIcon] = useState();

    const getWeatherData = async () => {
        try {
            // les differents parametres
            const baseUrl = "http://api.openweathermap.org/data/2.5/weather"
            const apiKey = "87d1f44f05c2648c024e1d99dd2b8080"
            const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
            // fetch de données
            const response = await fetch(url);
            // stockage en Json
            const json = await response.json();
            // console.log(json)
            // recup température arrondie
            const temp = Math.round(json.main.temp);
            // mise en state
            setTemperature(temp);
            // mise en state de l'icon qui correspond
            setIcon(json.weather[0].icon)
        } catch (error) {
            console.error(error);
        }
    }

    if (temperature === undefined) {
        return (
        <div className="weather-widget">
        <div className="weather-widget__loading">
            <p>Loading...</p>
        </div>
        </div>
        )
    }
    
    useEffect(() => {
        getWeatherData();
    }, [city])

    return (
        <View style={styles.container}>
            <Text>Dans la ville de : {city}</Text>
            <Text>La température est de : {temperature} degrés</Text>
            <Image source={{ url: `http://openweathermap.org/img/wn/${icon}@2x.png` }} style = {{ width: 100, height: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});