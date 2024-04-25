import { View, Text, Image } from 'react-native'
import React from 'react'
import { ForecastListItemStyle } from './ForecastListItem.style'

const ForecastListItem = ({image, day, date, temperature}) => {

    return (
        <View style={ForecastListItemStyle.container}>
            <Image source={image} style={ForecastListItemStyle.img}/>
            <Text style={ForecastListItemStyle.txt}>{day}</Text>
            <Text style={ForecastListItemStyle.txt}>{date}</Text>
            <Text style={ForecastListItemStyle.txt}>{temperature}°</Text>
        </View>
    )
}

export default ForecastListItem
