import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Products, ProductsDetails, Profile } from '../screens/index';
import { colors, fontSize } from '../constant/index';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={Category}
            options={({navigation}) => ({
                headerTitleStyle: {
                    fontFamily: 'KalamBold',
                    fontSize: fontSize.xxlarge
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.primary,
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="people" size={28} color={colors.primary} style={{padding: 5}} />
                    </TouchableOpacity>
                )
            })}
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
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
}

export default ShopNavigator;
