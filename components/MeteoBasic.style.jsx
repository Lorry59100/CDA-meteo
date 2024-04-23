import { StyleSheet } from "react-native";

export const MeteoBasicStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50
    },
    img: {
        width: 100,
        height: 100,
        marginTop: 50
    },
    weatherLabel: {
        transform: [{ rotate: '-90deg' }],
        marginTop: 50
    },
    mediumSize: {
        color: "white",
        fontSize: 24
    },
    bigSize: {
        color: "white",
        fontSize: 150
    }
});
