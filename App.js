import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, AppRegistry } from 'react-native';

import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

import MainButton from './comps/MainButton/index';
import BottomNav from './comps/BottomNavBar';
import Landing from './pages';
import Requests from './pages/requests';
import Intro from './pages/intro';
import WorkerProfile from './pages/workerprofile';
import EditItems from './pages/edititems';
import DonorProfile from './pages/DonorProfile'
import NewListing from './pages/NewListing';
import donorHome from './pages/donorhome';
import donorListing from './pages/donorlisting';
import Whomepage from './pages/workerhomepage';
import AllListing from './pages/listings';
import Viewlisting from './pages/viewlisting';
import Market from './pages/listings';
import Donorrequest from './pages/donorrequest';
import ItemRequests from './pages/ItemRequests'


const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    salmon: "#EB8D8D",
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
        <Stack.Screen name="NewListing" component={NewListing} options={{title: 'New Listing', headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="WorkerProfile" component={WorkerProfile} options={{title: 'Profile', headerStyle: {backgroundColor: '#92A8F8'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="EditItems" component={EditItems}/>
        <Stack.Screen name="donorHome" component={donorHome} options={{title: 'Home', headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="donorListing" component={donorListing} options={{title: 'Listing', headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="Whomepage" component={Whomepage} options={{title: 'Home', headerStyle: {backgroundColor: '#92A8F8'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Requests" component={Requests} options={{title: 'Your Requests', headerStyle: {backgroundColor: '#92A8F8'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Market" component={Market} options={{title: 'Listings', headerStyle: {backgroundColor: '#92A8F8'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="DonorProfile" component={DonorProfile} options={{title: 'Profile',headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="Viewlisting" component={Viewlisting} options={{title: 'Listing', headerStyle: {backgroundColor: '#92A8F8'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="Donorrequest" component={Donorrequest} options={{title: 'Requests', headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="ItemRequests" component={ItemRequests} options={{title: 'Item Requests', headerStyle: {backgroundColor: '#EB8D8D'}, headerTintColor: '#FFF'}}/>
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
