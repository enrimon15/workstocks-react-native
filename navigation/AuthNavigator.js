import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";
import Login from "../pages/LoginPage";
import SplashScreen from "../pages/SplashPage";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <AuthStack.Screen name="Login" component={Login}  />
            <AuthStack.Screen name="Splash" component={SplashScreen}  />
        </AuthStack.Navigator>
    )
}