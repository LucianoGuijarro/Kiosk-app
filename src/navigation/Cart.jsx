import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, fontSize } from "../constant";
import { Cart, Address } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen name="Cart" component={Cart}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: colors.primary,
                    headerTitleStyle: {
                        fontFamily: 'KalamBold',
                        fontSize: fontSize.xxlarge
                    }
                }}
            />
            <Stack.Screen name='Address' component={Address}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: colors.primary,
                    headerTitleStyle: {
                        fontFamily: 'KalamBold',
                        fontSize: fontSize.xxlarge
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator