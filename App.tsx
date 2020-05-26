import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants  from 'expo-constants'
import MapWebView from "./components/MapWebView";
import { white, purple } from './utils/colors'

// @ts-ignore
const AppStatusBar = ({backgroundColor, ...props}) => {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
  )
}

export default function App() {
  return (
    <>
      <AppStatusBar backgroundColor={purple} barStyle='light-content' />
      <MapWebView />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
