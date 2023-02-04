import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./Shop";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;