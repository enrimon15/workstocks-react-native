import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Applications from "../pages/ApplicationsPage";
import {Routes} from "../constants/routes";

const ApplicationsStack = createNativeStackNavigator();

const ApplicationsNavigator = () => {
    return (
        <ApplicationsStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.applicationsPage}>
            <ApplicationsStack.Screen name={Routes.applicationsPage} component={Applications}  />
            <ApplicationsStack.Screen name={Routes.jobDetails} component={JobDetail}  />
        </ApplicationsStack.Navigator>
    )
};

export default ApplicationsNavigator;