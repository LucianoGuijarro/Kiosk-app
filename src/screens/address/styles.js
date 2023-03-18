import { StyleSheet } from "react-native";
import { colors, fontSize } from '../../constant/index';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: fontSize.xlarge,
        textAlign: 'center',
        fontFamily: 'KalamBold',
        marginTop: 20,
    },
    containerAddress: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAddress: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.large,
    },
    addressTitle: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.xlarge,
        marginBottom: 10,
    },
    messageContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        opacity: 0.6
    },
    important: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.medium,
        color: colors.primary,
    },
    importantMessage: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.medium,
        color: colors.primary,
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginTop: 30,
    },
});