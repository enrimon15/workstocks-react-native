import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Home from "../pages/HomePage";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home}  />
            <HomeStack.Screen name="JobDetails" component={JobDetail}  />
            <HomeStack.Screen name="JobList" component={JobDetail}  />
        </HomeStack.Navigator>
    )
}