import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans'

import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  }); // Carrega a página somente depois que a fonte fopr carregada

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light"  backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}

// https://youtu.be/RZbz26EVysA?t=884
