import { View, Text } from 'react-native'
import React from 'react'
import { MeteoAdvancedStyle } from './MeteoAdvanced.style'

const MeteoAdvanced = ({dusk, down, wind}) => {
    return (
    <View style={MeteoAdvancedStyle.container}>
        <View style={MeteoAdvancedStyle.infoContainer}>
            <Text style={MeteoAdvancedStyle.infoTxt}>{dusk}</Text>
            <Text style={MeteoAdvancedStyle.infoTxt}>Aube</Text>
        </View>
        <View style={MeteoAdvancedStyle.infoContainer}>
            <Text style={MeteoAdvancedStyle.infoTxt}>{down}</Text>
            <Text style={MeteoAdvancedStyle.infoTxt}>Crépuscule</Text>
        </View>
        <View style={MeteoAdvancedStyle.infoContainer}>
            <Text style={MeteoAdvancedStyle.infoTxt}>{wind} km/h</Text>
            <Text style={MeteoAdvancedStyle.infoTxt}>Vent</Text>
        </View>
    </View>
    )
    }

export default MeteoAdvanced