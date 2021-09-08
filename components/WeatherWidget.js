import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WeatherWidget({ city }) {
    const [temperature, setTemperature] = useState();
    const [icon, setIcon] = useState();
    const [picture, setPicture] = useState();

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


            // requete de l'image de fond
            const pictureUrl = `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
            //fetch des données
            const responsePicture = await fetch(pictureUrl.toLowerCase());
            const jsonPicture = await responsePicture.json()
            // le lien de l'image va dans le state
            setPicture(jsonPicture.photos[0].image.mobile);

        } catch (error) {
            console.error(error);
        }
    }
    // mise en majuscule de la premiere lettre
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        getWeatherData();
    }, [city])

    if (temperature === undefined) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    
    return (
        <View style={{display:'flex', alignItems: 'center',}}>
            <Image source={{ uri: picture}} style={{ width: 400, height: 400 }} />
            <Text style={{ fontSize: 20}} >{capitalizeFirstLetter(city)}</Text>
            <Text>La température est de : {temperature} degrés</Text>
            <Image source={{ url: `http://openweathermap.org/img/wn/${icon}@2x.png` }} style={{ width: 100, height: 100 }} />
        </View>
    );
}
