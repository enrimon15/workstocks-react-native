import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {sUserData} from "../store/selectors/UserSelector";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import FavoritesNavigator from "./FavoritesNavigator";
import ApplicationsNavigator from "./ApplicationsNavigator";
import CustomDrawer from "../components/nav/CustomDrawer";
import Profile from "../pages/ProfilePage";
import Settings from "../pages/Settings";
import {Colors} from "../constants/colors";
import {Routes} from "../constants/routes";
import {ObjectUtils} from "../util/ObjectUtils";

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    const userLogged = useSelector(sUserData);
    const conditionAuthNavigation = (ObjectUtils.isEmpty(userLogged));

    return (
        <NavigationContainer>
            {conditionAuthNavigation ? (
                    <AuthNavigator/>
                ) :
                (<Drawer.Navigator
                    initialRouteName={Routes.home}
                    drawerContent={props => <CustomDrawer {...props} />}
                    screenOptions={{
                        headerShown: false,
                        drawerActiveBackgroundColor: Colors.primary,
                        drawerActiveTintColor: Colors.light,
                        drawerInactiveTintColor: Colors.dark,
                        drawerLabelStyle: {
                            fontFamily: 'MS-Medium',
                            fontSize: 15,
                        },
                    }}
                >
                    <Drawer.Screen name={Routes.home} component={HomeNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="home-outline" size={22} color={color}/>
                        ),
                    }}/>
                    <Drawer.Screen name={Routes.favorites} component={FavoritesNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="ios-heart-outline" size={22} color={color}/>
                        ),
                    }}/>
                    <Drawer.Screen name={Routes.applications} component={ApplicationsNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="ios-briefcase-outline" size={22} color={color}/>
                        ),
                    }}/>
                    <Drawer.Screen name={Routes.profile} component={Profile} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="person-outline" size={22} color={color}/>
                        ),
                    }}
                    />
                    <Drawer.Screen name={Routes.settings} component={Settings} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="settings-outline" size={22} color={color}/>
                        ),
                    }}
                    />
                </Drawer.Navigator>)
            }
        </NavigationContainer>
    )
};

export default RootNavigator;