import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Favorites from "../pages/FavoritesPage";
import {Routes} from "../constants/routes";

const FavoritesStack = createNativeStackNavigator();

const FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.favoritesPage}>
            <FavoritesStack.Screen name={Routes.favoritesPage} component={Favorites}  />
            <FavoritesStack.Screen name={Routes.jobDetails} component={JobDetail}  />
        </FavoritesStack.Navigator>
    )
};

export default FavoritesNavigator;