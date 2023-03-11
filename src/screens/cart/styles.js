import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentList: {
        flex: 1,
        backgroundColor: colors.background
    },
    footer: {
        borderTopColor: colors.black,
        borderTopWidth: 1,
        paddingTop: 10,
        backgroundColor: colors.white,
    },
    containerButton: {
        marginHorizontal: 10,
        marginBottom: 20
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 5,
    },
    total: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.large
    },
    totalPrice: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.large,
    },
    header: {
        flex: 1,
        backgroundColor: colors.background,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: fontSize.xlarge,
        fontFamily: 'KalamBold'
    },
})