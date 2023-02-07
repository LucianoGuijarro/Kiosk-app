import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from './Taps';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;