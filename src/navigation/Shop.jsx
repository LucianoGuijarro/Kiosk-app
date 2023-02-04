import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Products, ProductsDetails } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} 
        options={{
            title: 'Products details',
        }}
        />
    </Stack.Navigator>
}

export default ShopNavigator;
