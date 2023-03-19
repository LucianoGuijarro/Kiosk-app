import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, fontSize } from "../constant";
import Orders from "../screens/orders/Orders";
import { Profile} from '../screens/index'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Orders" >
            <Stack.Screen name="Orders" component={Orders}
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
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default OrderNavigator;