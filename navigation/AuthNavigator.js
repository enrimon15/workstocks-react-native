import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../pages/LoginPage";
import SplashScreen from "../pages/SplashPage";
import Register from "../pages/RegisterPage";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <AuthStack.Screen name="Splash" component={SplashScreen}  />
            <AuthStack.Screen name="Login" component={Login}  />
            <AuthStack.Screen name="Register" component={Register}  />
        </AuthStack.Navigator>
    )
}