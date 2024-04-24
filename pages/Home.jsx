import { View, Text, Image } from 'react-native'
import { HomeStyle } from './Home.style'
import { ImageBackground } from 'react-native'
import MeteoBasic from '../components/MeteoBasic'
import { useEffect, useState } from 'react'
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"
import { MeteoAPI } from '../api/meteo'
import { getWeatherInterpretation } from '../components/Services/meteo-services'
import MeteoAdvanced from '../components/MeteoAdvanced/MeteoAdvanced'

const Home = () => {
    // Stocker les coordonnées, dans un state.
    const [coords, setCoords] = useState();

    // Sauvegarder les coordonnées mises à jour.
    const [weather, setWeather] = useState();
    const currentWeather = weather?.current_weather;

    //Stocker la ville récupérée via l'API nominatim
    const [city, setCity] = useState(city);
    
    //Mise en place d'un useEffect pour récupérer les coordonées au montage du composant
    useEffect(() => {
        getUserCoords();
    }, [])

    useEffect(() => {
        if(coords) {
            console.log('Récupération des données météo pour les coordonnées :', coords);
            fetchWeather(coords);
            fetchCity(coords)
        }
    }, [coords]);

    async function fetchWeather (coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        console.log('Données météo reçues :', weatherResponse);
        console.log('Données météo reçues.current :', weatherResponse.current_weather);
        /* setWeather(weatherResponse.current_weather); */
        setWeather(weatherResponse);
    }

    async function fetchCity (coordinates) {
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        console.log('cityresponse: ', cityResponse)
        setCity(cityResponse)
    }

    // Déclaration de la fonction asynchrone pour récupérer les coordonnées utilisateur
    async function getUserCoords() {
        let {status} = await requestForegroundPermissionsAsync();
        if(status === "granted") {
            const location = await getCurrentPositionAsync();
            console.log('localisation : ', location);
            setCoords({lat: location.coords.latitude, lng: location.coords.longitude}); // Mettre à jour l'état coords ici
        } else {
            setCoords({lat: "48.85", lng: "2.35"});
        }
    }
    console.log('dans le state:', weather)

    return (
      <ImageBackground style={HomeStyle.background} source={require('../assets/background_app.jpg')}>
        <View style={HomeStyle.container}>
            <MeteoBasic
            temperature={Math.round(weather?.current_weather?.temperature)}
            city={city}
            interpretation={getWeatherInterpretation(weather?.current_weather?.weathercode)}
            />
            <MeteoAdvanced
            wind={weather?.current_weather?.windspeed}
            dusk={weather?.daily.sunrise[0].split("T")[1]}
            down={weather?.daily.sunset[0].split("T")[1]}
            />
        </View>
      </ImageBackground>
    )
  }
  
  export default Home
  