import { StyleSheet } from "react-native";
import { fontSize, colors } from '../../constant/index'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        marginHorizontal: 20,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        fontSize: fontSize.medium,
        fontFamily: 'KalamRegular',
    },
    containerMessage: {
        marginHorizontal: 20,
    },
    message: {
        color: colors.primary,
        fontFamily: 'KalamRegular',
        marginBottom: 5
    }
});