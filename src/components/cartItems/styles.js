import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.large
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantity: {
        fontFamily: 'KalamRegular'
    },
    price: {
        fontFamily: 'KalamBold',
    },
})