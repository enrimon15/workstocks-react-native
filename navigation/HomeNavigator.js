import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";
import {Routes} from "../constants/routes";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.homePage}>
            <HomeStack.Screen name={Routes.homePage} component={Home}  />
            <HomeStack.Screen name={Routes.jobDetails} component={JobDetail}  />
            <HomeStack.Screen name={Routes.jobList} component={Search}  />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;