import { StatusBar } from 'expo-status-bar';
import {Provider} from "react-redux";
import {useState} from "react";
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import RootNavigator from "./navigation/DrawerNavigator";
import createStore from './store/index'


const {store} = createStore();

const fetchFonts = () => {
  return Font.loadAsync({
    'MS-Bold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'MS-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'MS-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
    />
  }

  return (
    <>
      <StatusBar style="light"/>
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    </>
  );
}
