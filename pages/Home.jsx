import { View, Text, Image } from 'react-native'
import { HomeStyle } from './Home.style'
import { ImageBackground } from 'react-native'
import MeteoBasic from '../components/MeteoBasic'
import { useEffect, useState } from 'react'
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"
import { MeteoAPI } from '../api/meteo'
import { getWeatherInterpretation } from '../components/Services/meteo-services'

const Home = () => {
    // Stocker les coordonnées, dans un state.
    const [coords, setCoords] = useState();

    // Sauvegarder les coordonnées mises à jour.
    const [weather, setWeather] = useState();
    const currentWeather = weather?.current_weather;
    
    //Mise en place d'un useEffect pour récupérer les coordonées au montage du composant
    useEffect(() => {
        getUserCoords();
    }, [])

    useEffect(() => {
        if(coords) {
            console.log('Récupération des données météo pour les coordonnées :', coords);
            fetchWeather(coords);
        }
    }, [coords]);

    async function fetchWeather (coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        console.log('Données météo reçues :', weatherResponse);
        console.log('Données météo reçues.current :', weatherResponse.current_weather);
        setWeather(weatherResponse.current_weather);
    }

    // Déclaration de la fonction asynchrone pour récupérer les coordonnées utilisateur
    async function getUserCoords() {
        let {status} = await requestForegroundPermissionsAsync();
        if(status === "granted") {
            const location = await getCurrentPositionAsync();
            console.log('localisation : ', location)
            setCoords({lat: location.coords.latitude, lng: location.coords.longitude})
        } else {
            setCoords({lat: "48.85", lng: "2.35"})
        }
    }
    console.log('coordonnées: ', coords)
    console.log('dans le state:', weather)

    return (
      <ImageBackground style={HomeStyle.background} source={require('../assets/background_app.jpg')}>
        <View style={HomeStyle.container}>
            <MeteoBasic
            temperature={Math.round(weather?.temperature)}
            city="Paris"
            interpretation={getWeatherInterpretation(weather?.weathercode)}
            />
        </View>
      </ImageBackground>
    )
  }
  
  export default Home
  