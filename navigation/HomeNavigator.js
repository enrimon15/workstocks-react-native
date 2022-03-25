import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomePage">
            <HomeStack.Screen name="HomePage" component={Home}  />
            <HomeStack.Screen name="JobDetails" component={JobDetail}  />
            <HomeStack.Screen name="JobList" component={Search}  />
        </HomeStack.Navigator>
    )
}