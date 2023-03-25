import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentModal: {
        backgroundColor: colors.white,
        height: '25%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleModal: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.xxlarge,
        margin: 20,
        color: colors.secondary,
    },
    button: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.secondary,
        padding: 10,
    },
    contentButton: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'KalamRegular',
        marginTop: 5,
        fontSize: fontSize.large,
        color: colors.secondary,
    },
    contentTitlte: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconX: {
        marginRight: 15,
    }
})