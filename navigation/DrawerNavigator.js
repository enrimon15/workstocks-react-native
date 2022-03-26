import {NavigationContainer} from "@react-navigation/native";
import Home from "../pages/HomePage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../components/nav/CustomDrawer";
import Colors from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';
import {HomeNavigator} from "./HomeNavigator";
import {AuthNavigator} from "./AuthNavigator";
import {useSelector} from "react-redux";
import {sUserData} from "../store/selectors/UserSelector";
import {ObjectUtils} from "../util/ObjectUtils";
import {FavoritesNavigator} from "./FavoritesNavigator";
import {ApplicationsNavigator} from "./ApplicationsNavigator";

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    const userLogged = useSelector(sUserData);

    const conditionAuthNavigation = (ObjectUtils.isEmpty(userLogged));

    return(
        <NavigationContainer>
            {conditionAuthNavigation  ? (
                    <AuthNavigator/>
                ) :
                (<Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={props => <CustomDrawer {...props} />}
                    screenOptions={{
                        headerShown: false,
                        drawerActiveBackgroundColor: Colors.primary,
                        drawerActiveTintColor: 'white',
                        drawerInactiveTintColor: 'black',
                        drawerLabelStyle: {
                            fontFamily: 'MS-Medium',
                            fontSize: 15,
                        },
                    }}
                    >
                    <Drawer.Screen name="Home" component={HomeNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
                    <Drawer.Screen name="Preferiti" component={FavoritesNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="ios-heart-outline" size={22} color={color} />
                        ),
                    }} />
                    <Drawer.Screen name="Candidature" component={ApplicationsNavigator} options={{
                        drawerIcon: ({color}) => (
                            <Ionicons name="ios-briefcase-outline" size={22} color={color} />
                        ),
                    }} />
                    <Drawer.Screen
                        name="Profilo"
                        component={Home}
                        options={{
                            drawerIcon: ({color}) => (
                                <Ionicons name="person-outline" size={22} color={color} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Impostazioni"
                        component={Home}
                        options={{
                            drawerIcon: ({color}) => (
                                <Ionicons name="settings-outline" size={22} color={color} />
                            ),
                        }}
                    />
                </Drawer.Navigator>)
            }
        </NavigationContainer>
    )
}

export default RootNavigator;