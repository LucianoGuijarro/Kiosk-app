import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, fontSize } from "../constant";
import { Cart, Address, Maps, Profile } from "../screens";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen name="Cart" component={Cart}
                options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTintColor: colors.primary,
                    headerTitleStyle: {
                        fontFamily: 'KalamBold',
                        fontSize: fontSize.xxlarge
                    },
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Ionicons name="people" size={28} color={colors.primary} style={{ padding: 5 }} />
                        </TouchableOpacity>
                    )
                })}
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
            <Stack.Screen name='Maps' component={Maps}
            />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default CartNavigator