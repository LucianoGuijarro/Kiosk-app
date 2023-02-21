import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from '../screens/index';
import { fontSize } from '../constant/index';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={Account}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'KalamBold',
                        fontSize: fontSize.xxlarge
                    }
                }}
            />
        </Stack.Navigator>
    )
}
export default AccountNavigator