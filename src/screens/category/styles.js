import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.large,
        color: colors.primary
    },
    containerList: {
        flex: 1
    },
    contentContainerList: {
        paddingBottom: 10
    }
})