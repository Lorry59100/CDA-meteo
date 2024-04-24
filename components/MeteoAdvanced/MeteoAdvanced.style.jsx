import { StyleSheet } from "react-native";

export const MeteoAdvancedStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
        padding: 30
    },
    infoContainer: {
        alignItems: "center",
    },
    infoTxt: {
        fontSize: 18,
        color: "white"
    }
});
