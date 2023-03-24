import { StyleSheet } from "react-native";
import { fontSize, colors } from '../../constant/index';

export const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center',
        marginVertical: 10
    },
    contentContainer: {
        width: '80%',
        backgroundColor: colors.white,
        height: 200,
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
        paddingTop: 5, 
    },
    ImageContainer: {
        alignItems: 'center'
    },
    image: {
        marginTop: 10,
        height: 105,
        width: 85,
    },
    price: {
        fontFamily: 'KalamRegular',
    },
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.medium,
        textAlign: 'center',
        marginBottom: 5,
    },
    weight: {
        fontFamily: 'KalamRegular'
    },
})