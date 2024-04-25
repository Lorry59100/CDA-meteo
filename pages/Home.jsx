import { View, Alert } from 'react-native'
import { HomeStyle } from './Home.style'
import MeteoBasic from '../components/MeteoBasic'
import { useEffect, useState } from 'react'
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"
import { MeteoAPI } from '../api/meteo'
import { getWeatherInterpretation } from '../components/Services/meteo-services'
import MeteoAdvanced from '../components/MeteoAdvanced/MeteoAdvanced'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container/Container'
import SearchBar from '../components/SearchBar/SearchBar'

const Home = () => {
    // Stocker les coordonnées, dans un state.
    const [coords, setCoords] = useState();

    // Sauvegarder les coordonnées mises à jour.
    const [weather, setWeather] = useState();

    //Stocker la ville récupérée via l'API nominatim
    const [city, setCity] = useState('');
    
    //Mise en place d'un useEffect pour récupérer les coordonées au montage du composant
    useEffect(() => {
        getUserCoords();
    }, [])

    useEffect(() => {
        if(coords) {
            fetchWeather(coords);
            fetchCity(coords)
        }
    }, [coords]);

    async function fetchWeather (coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse);
    }

    async function fetchCity (coordinates) {
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        setCity(cityResponse)
    }

    async function fetchCoordsByCity(city) {
        try {
            const coords = await MeteoAPI.fetchCoordsFromCity(city);
            setCoords(coords);
        } catch (error) {
            Alert.alert("Désolé", e)
        }
    }

    // Déclaration de la fonction asynchrone pour récupérer les coordonnées utilisateur
    async function getUserCoords() {
        let {status} = await requestForegroundPermissionsAsync();
        if(status === "granted") {
            const location = await getCurrentPositionAsync();
            setCoords({lat: location.coords.latitude, lng: location.coords.longitude}); // Mettre à jour l'état coords ici
        } else {
            setCoords({lat: "48.85", lng: "2.35"});
        }
    }
    
    const nav = useNavigation();
    function goToForecastPage() {
        nav.navigate("Forecast", { city, ...weather.daily });
    }

    console.log('dans le state:', weather)

    return (
      <Container>
        <View style={HomeStyle.container}>
            <MeteoBasic
            temperature={Math.round(weather?.current_weather?.temperature)}
            city={city}
            interpretation={getWeatherInterpretation(weather?.current_weather?.weathercode)}
            onPress={goToForecastPage}
            />
            
            <SearchBar onSubmit={fetchCoordsByCity}/>

            <MeteoAdvanced
            wind={weather?.current_weather?.windspeed}
            dusk={weather?.daily.sunrise[0].split("T")[1]}
            down={weather?.daily.sunset[0].split("T")[1]}
            />
        </View>
      </Container>
    )
  }
  
  export default Home
  