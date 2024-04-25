import { StyleSheet } from "react-native";

export const SearchBarStyle = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20, // Increase the shadowRadius for a more pronounced shadow effect
        elevation: 5,
        borderRadius: 50,
    },
    bar: {
        height: 70,
        paddingLeft: 20,
        borderRadius: 20,
        marginTop: 5,
        color: "white"
    },
});
