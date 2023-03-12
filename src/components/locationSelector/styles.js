import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant"; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    preview: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.black,
        height: 180,
        width: '100%',
        marginBottom: 20,
    },
    text: {
        fontFamily: 'KalamRegular',
        fontSize: fontSize.medium,
    },
})