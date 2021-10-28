import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import ButtonUI from './comps/MainButton/index';
import { ThemeProvider, Text, Div, Button, Icon } from 'react-native-magnus';
import ItemIcon from './comps/ItemIcon';


const ffTheme = {
  colors: {
    periwinkle: "#92A8F8"
  }
}

export default function App() {

  return (
    <ThemeProvider theme={ffTheme}>
      <Div style={styles.container}>
        <Text fontSize='6xl' fontWeight='600' color='periwinkle'>Welcome to Frefurnish.</Text>
      </Div>
    </ThemeProvider>
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
