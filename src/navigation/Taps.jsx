import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./Shop";
import CartNavigator from './Cart';
import OrderNavigator from './Orders';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize } from "../constant";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'KalamRegular',
                    fontSize: fontSize.xsmall
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.grey
            }}>
            <BottomTab.Screen name="ShopTabs" component={ShopNavigator}
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'ios-home' : 'ios-home-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
                }}
            />
            <BottomTab.Screen name='OrdersTabs' component={OrderNavigator}
                options={{
                    title: 'Orders',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    ),                  
                }}
            />
            <BottomTab.Screen name="CartTabs" component={CartNavigator}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'ios-cart' : 'ios-cart-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    ),
                    tabBarBadge: cart.length === 0 ? null : cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: colors.secondary,
                        fontFamily: 'KalamBold',
                        fontSize: fontSize.xsmall
                    }
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs