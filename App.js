import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, AppRegistry } from 'react-native';

import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from './comps/MainButton/index';
import BottomNav from './comps/BottomNavBar';
import Landing from './pages';
import Intro from './pages/intro';
import Whomepage from './pages/workerhomepage';
import AllListing from './pages/listings';


const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
    <ThemeProvider theme={ffTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Whomepage" component={Whomepage} />
        <Stack.Screen name="AllListing" component={AllListing} />
      </Stack.Navigator>
    </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:16,
    marginRight: 16
  },
});
