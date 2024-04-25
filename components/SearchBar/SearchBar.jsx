import { View, TextInput } from 'react-native'
import React from 'react'
import { SearchBarStyle } from './SearchBar.style'

const SearchBar = ({onSubmit}) => {
        return (
        <View style={SearchBarStyle.container}>
            <TextInput style={SearchBarStyle.bar} onSubmitEditing={(e)=>onSubmit(e.nativeEvent.text)} placeholder='Chercher une ville'
            placeholderTextColor="#FFF" clearTextOnFocus />
        </View>
    );
}

export default SearchBar
