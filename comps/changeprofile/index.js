import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import {  SafeAreaView, FlatList } from 'react-native';
import {Div, ThemeProvider, Button, Input, Icon, Image, Textarea, Overlay} from 'react-native-magnus';
import Constants from 'expo-constants';
import HalfButton from '../halfbutton';

const Container = styled.View`
  width: 300px;
  height: 400px;
  padding: 0;
  background-color: blue;
`
const TopContainer = styled.View`
  flex: 1;
  background-color: yellow;
  flex-direction: row;
`
const BottomContainer = styled.View`
  flex: 1.3;
  background-color: green;
`
const ButtonContainer = styled.View`
  flex: 0.5;
  background-color: pink;
  flex-direction: row;
`
const ImageContainer = styled.View`
  flex: 0.4;
  background-color: beige;
`

export default function ChangeProfile({
  visible
}) {
  return (
    <Overlay visible={visible} justifyContent='center' alignItems='center'>
      <Container>
        <TopContainer>
          <ImageContainer>

          </ImageContainer>
        </TopContainer>
        <BottomContainer>
          
        </BottomContainer>
        <ButtonContainer>
          <HalfButton />
          <HalfButton />
        </ButtonContainer>
      </Container>
    </Overlay>
  )
}
