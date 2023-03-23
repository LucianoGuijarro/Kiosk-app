import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imagenContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageProfile: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 150,
        width: 150,
    },
    button: {
        position: 'absolute',
        bottom: 15,
        right: 30,
    },
    text: {
        marginTop: 15,
        fontSize: fontSize.large
    },
    iconCamera: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 2,
    },
    image: {
        height: '75%',
        width: '75%',
        borderRadius: 100,
    },
})