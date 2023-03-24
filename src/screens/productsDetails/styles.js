import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {},
    image: {
        height: 400,
        width: 400,
    },
    containerButton: {
        marginTop: 20,
    },
    containerPrice: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    price: {
        marginStart: 20,
        fontFamily: 'KalamBold',
        fontSize: fontSize.xxlarge
    },
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.xlarge,
        color: colors.black,
        marginBottom: 20,
        width: '90%',
    }
})