import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {useState} from "react";
import RootNavigator from "./navigation/DrawerNavigator";

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
      <RootNavigator/>
    </>
  );
}
