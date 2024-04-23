import { View, Text, Image } from 'react-native'
import React from 'react'
import { MeteoBasicStyle } from './MeteoBasic.style'
import Clock from './Clock/Clock'

const MeteoBasic = ({temperature, city, interpretation }) => {
    console.log(interpretation)
    return (
    <View style={MeteoBasicStyle.container}>
        <View>
            <Text style={MeteoBasicStyle.mediumSize}>Roubaix</Text>
            <Text style={MeteoBasicStyle.bigSize}>{temperature}°</Text>
        </View>
        <View>
            <Clock/>
            <Text style={[MeteoBasicStyle.weatherLabel, MeteoBasicStyle.mediumSize]}>{interpretation?.label}</Text>
            <Image source={interpretation?.image} style={MeteoBasicStyle.img}/>
        </View>
    </View>
    )
}

export default MeteoBasic