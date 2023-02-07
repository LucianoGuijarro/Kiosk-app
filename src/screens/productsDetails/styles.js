import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {},
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.xlarge,
        color: colors.black,
        marginBottom: 20
    }
})