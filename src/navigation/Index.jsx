import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from './Taps';
import AccountNavigator from './Account';
import { useSelector } from "react-redux";

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId)
    return (
        <NavigationContainer>{userId ? <TabsNavigator /> : <AccountNavigator />}</NavigationContainer>
    )
}

export default AppNavigator;