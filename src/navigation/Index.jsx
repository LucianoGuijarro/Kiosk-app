import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from './Taps';
import AccountNavigator from './Account';
import { useState } from "react";

const AppNavigator = () => {
    const [userId, setUserId] = useState(false)
    return (
        <NavigationContainer>{userId ? <TabsNavigator /> : <AccountNavigator />}</NavigationContainer>
    )
}

export default AppNavigator;