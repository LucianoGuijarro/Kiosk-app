import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentList: {
        flex: 1,
        backgroundColor: colors.white
    },
    footer: {
        borderWidth: .5,
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 1,
        backgroundColor: colors.secondary
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    confrim: {
        fontFamily: 'KalamBold',
        color: colors.text,
        fontSize: fontSize.large
    },
    containerTotal: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    total: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.medium
    },
    totalPrice: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.large,
    }
})