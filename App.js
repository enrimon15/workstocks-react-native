import { StatusBar } from 'expo-status-bar';
import {Provider} from "react-redux";
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import RootNavigator from "./navigation/DrawerNavigator";
import createStore from './store/index'
import {PersistGate} from "redux-persist/integration/react";
import {useFonts} from "expo-font";
import i18n from './i18n/i18n';

const {store, persistor} = createStore();

export default function App() {
  const [fontsLoaded] = useFonts({
    'MS-Bold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'MS-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'MS-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light"/>
      <Provider store={store}>
        <PersistGate loading={<AppLoading/>} persistor={persistor}>
          <RootNavigator/>
        </PersistGate>
      </Provider>
    </>
  );
}
