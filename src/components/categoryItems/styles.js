import { StyleSheet } from "react-native";
import { colors, fontSize } from '../../constant/index';
import { CATEGORIES } from '../../constant/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        marginHorizontal: 20,
        height: 100,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    title: {
        color: colors.black,
        fontFamily: 'KalamRegular',
        fontSize: fontSize.large
    }
})