import { StyleSheet } from "react-native";
import { colors, fontSize } from '../../constant/index';

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    contentContainer: {
        width: '85%',
        maxWidth: 400,
        backgroundColor: colors.white,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 15,
        minHeight: 330,
    },
    title: {
        fontSize: fontSize.xxlarge,
        color: colors.primary,
        fontFamily: 'KalamBold',
        textAlign: 'center',
        paddingVertical: 15
    },
    label: {
        marginHorizontal: 20,
        fontFamily: 'KalamRegular',
        fontSize: fontSize.large
    },
    containerButton: {
        marginHorizontal: 20,
    },
    containerFooter: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        paddingBottom: 15
    },
    textFooter: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.small
    },
    textRegister: {
        marginLeft: 10,
        fontFamily: 'KalamRegular',
        fontSize: fontSize.medium,
        color: colors.primary
    },
})