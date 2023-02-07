import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        borderWidth: 1
    },
    date: {
        marginBottom: 3,
        fontFamily: 'KalamBold'
    },
    total: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.medium
    },
})