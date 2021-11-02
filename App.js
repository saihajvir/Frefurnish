import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';
import MainButton from './comps/MainButton/index';



const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

export default function App() {

  return (
    <ThemeProvider theme={ffTheme}>
      <Div style={styles.container}>
        <Text fontSize='6xl' fontWeight='600' color='periwinkle'>Welcome to Frefurnish.</Text>
      </Div>
      <BottomNav/>
    </ThemeProvider>
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
