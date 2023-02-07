import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Products, ProductsDetails } from '../screens/index';
import { colors, fontSize } from '../constant/index'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={Category}
            options={{
                headerTitleStyle: {
                    fontFamily: 'KalamBold',
                    fontSize: fontSize.xxlarge
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.primary,
            }}
        />
        <Stack.Screen name="Products" component={Products}
            options={({ route }) => ({
                title: route.params.title,
                headerTitleStyle: {
                    fontFamily: 'KalamBold',
                    fontSize: fontSize.xxlarge
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.primary
            })}
        />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails}
            options={({ route }) => ({
                title: route.params.title,
                headerTitleStyle: {
                    fontFamily: 'KalamBold',
                    fontSize: fontSize.xxlarge,
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.primary,
            })
            }
        />
    </Stack.Navigator>
}

export default ShopNavigator;
