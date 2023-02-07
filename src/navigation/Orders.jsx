import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, fontSize } from "../constant";
import Orders from "../screens/orders/Orders";

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Orders" >
            <Stack.Screen name="Orders" component={Orders} 
            options={{
                headerTitleAlign: 'center',
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontFamily: 'KalamBold',
                    fontSize: fontSize.xxlarge
                }
            }}
            />
        </Stack.Navigator>
    )
}

export default OrderNavigator;