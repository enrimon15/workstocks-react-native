import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../pages/LoginPage";
import SplashScreen from "../pages/SplashPage";
import Register from "../pages/RegisterPage";
import {Routes} from "../constants/routes";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.splash}>
            <AuthStack.Screen name={Routes.splash} component={SplashScreen}  />
            <AuthStack.Screen name={Routes.login} component={Login}  />
            <AuthStack.Screen name={Routes.register} component={Register}  />
        </AuthStack.Navigator>
    )
};

export default AuthNavigator;