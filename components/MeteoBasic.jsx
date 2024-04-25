import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { MeteoBasicStyle } from './MeteoBasic.style'
import Clock from './Clock/Clock'

const MeteoBasic = ({onPress, temperature, city, interpretation }) => {
    return (
    <View style={MeteoBasicStyle.container}>
        <View>
            <Text style={MeteoBasicStyle.mediumSize}>{city}</Text>
            <Pressable onPress={onPress}>
                <Text style={MeteoBasicStyle.bigSize}>{temperature}°</Text>
            </Pressable>
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