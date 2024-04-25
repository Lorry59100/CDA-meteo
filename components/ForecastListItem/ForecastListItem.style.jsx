import { StyleSheet } from "react-native";

export const ForecastListItemStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    img: {
        height: 50,
        width: 50
    },
    txt: {
        fontSize: 20,
        color: "white"
    }
});
