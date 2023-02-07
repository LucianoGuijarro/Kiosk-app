import { StyleSheet } from "react-native";
import { fontSize, colors } from '../../constant/index';

export const styles = StyleSheet.create({
    container: {
        width: '33%',
        alignItems: 'center',
        marginVertical: 10
    },
    contentContainer: {
        width: 115,
        backgroundColor: colors.background,
        height: 180,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ImageContainer: {
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 50,
    },
    price: {
        fontFamily: 'KalamRegular',
    },
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.medium,
        textAlign: 'center',
        marginBottom: 5
    },
    weight: {
        fontFamily: 'KalamRegular'
    },
})