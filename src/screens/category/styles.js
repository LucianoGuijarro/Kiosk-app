import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.large,
        color: colors.primary
    }
})