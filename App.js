import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {useState} from "react";
import AppNavigator from "./navigation/navigator";

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
    <AppNavigator/>
  );
}
