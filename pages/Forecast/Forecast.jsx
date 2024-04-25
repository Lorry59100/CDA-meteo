import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Container from '../../components/Container/Container'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ForecastStyle } from './Forecast.style';
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem';
import { getWeatherInterpretation } from '../../components/Services/meteo-services'; 
import { DAYS, dateToDDMM } from '../../components/Services/date-services';

const Forecast = ({}) => {
    const { params } = useRoute();
    const nav = useNavigation();
    const city = params ? params.city : '';
    const backButton = (
        <Pressable onPress={()=> nav.goBack()}>
            <Text style={ForecastStyle.icon}>{"<"}</Text>
        </Pressable>
    )
    const header = (
        <View style={ForecastStyle.container}>
            {backButton}
            <View style={ForecastStyle.textContainer}>
                <Text style={ForecastStyle.text}>{city}</Text>
                <Text style={ForecastStyle.text}>Prévisions sur 7 jours</Text>
            </View>
        </View>
    )
    const forecastlist = (
        <View style={ForecastStyle.listContainer}>
          {params.time.map((time, index) => {
                const code = params.weathercode[index];
                const image = getWeatherInterpretation(code).image;
                const date = new Date(time);
                const day = DAYS[new Date(time).getDay()];
                const temperature = params.temperature_2m_max[index];
                return (
                    <ForecastListItem
                        image={image}
                        day={day}
                        key={time}
                        date={dateToDDMM(date)}
                        temperature={temperature.toFixed(0)}
                    />
                );
            })}
        </View>
      );
    return (
        <Container>
            {header}
            {forecastlist}
        </Container>
    )
}

export default Forecast
