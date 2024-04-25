import { StyleSheet } from "react-native";

export const ForecastStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: "white",
        fontSize: 20
    },
    icon: {
        color: "white",
        fontSize: 50
    },
    listContainer: {
        marginTop : 100
    }
});
