import { View, Text } from 'react-native'
import React from 'react'
import { currentDatetime } from '../Services/date-services'
import { ClockStyle } from './Clock.style';

const Clock = () => {
    const currentTime = currentDatetime();
    return (
        <View>
            <Text style={ClockStyle.mediumSize}>{currentTime}</Text>
        </View>
    )
}

export default Clock
