import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Applications from "../pages/ApplicationsPage";

const ApplicationsStack = createNativeStackNavigator();

export const ApplicationsNavigator = () => {
    return (
        <ApplicationsStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Applications">
            <ApplicationsStack.Screen name="Applications" component={Applications}  />
            <ApplicationsStack.Screen name="JobDetails" component={JobDetail}  />
        </ApplicationsStack.Navigator>
    )
}