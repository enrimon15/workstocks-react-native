import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../pages/HomePage";


const AppStack = createNativeStackNavigator();

const AppNavigator = props => {
    return(
        <NavigationContainer>
            <AppStack.Navigator  screenOptions={{
                headerStyle: { backgroundColor:'#4F0F59',
                    height: 100,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23
                },
            }}>
                <AppStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                {/*<AppStack.Screen options={{ headerShown: false }} name="JobDetails" component={AlbumPage} />*/}
                {/*<AppStack.Screen options={{ headerShown: false }} name="Favorites" component={UserProfilePage}  />*/}
                {/*<AppStack.Screen options={{ headerShown: false }} name="Applications" component={SongPlayerPage}  />*/}
                {/*<AppStack.Screen options={{ headerShown: false }} name="Search" component={PlaylistSongsPage}  />*/}
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;