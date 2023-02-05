import { StyleSheet } from "react-native";
import { fontSize } from '../../constant/index';

export const styles = StyleSheet.create({
    container: {
        width: '33%',
        alignItems: 'center',
        marginVertical: 10
    },
    contentContainer: {
        backgroundColor: 'green',
        height: 150,
        padding: 10,
        borderRadius: 10
    },
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iamge: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.medium
    },
    price: {
        fontFamily: 'KalamRegular'
    },
    title: {
        fontFamily: 'KalamBold',
        fontSize: fontSize.small
    },
    weight: {
        fontFamily: 'KalamRegular'
    },
})