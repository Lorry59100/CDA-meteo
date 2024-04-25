import React from 'react'
import { ImageBackground } from 'react-native'
import { ContainerStyle } from './Container.style'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Container = ({children}) => {
    return (
      <ImageBackground style={ContainerStyle.background} source={require('../../assets/background_app.jpg')}>
        <SafeAreaProvider>
            <SafeAreaView style={ContainerStyle.container}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    )
}

export default Container
