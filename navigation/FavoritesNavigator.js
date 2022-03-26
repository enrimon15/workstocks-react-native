import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JobDetail from "../pages/JobDetailsPage";
import Favorites from "../pages/FavoritesPage";

const FavoritesStack = createNativeStackNavigator();

export const FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Favorites">
            <FavoritesStack.Screen name="Favorites" component={Favorites}  />
            <FavoritesStack.Screen name="JobDetails" component={JobDetail}  />
        </FavoritesStack.Navigator>
    )
}