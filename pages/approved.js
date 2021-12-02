import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv,Avatar, Input, Image } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import Chair from '../assets/aeron.jpg';
import WorkerGradient from '../assets/worker-gradient.png';

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Title = styled.Text`
    font-weight: 600;
    font-size: 32px;
    margin: 4%;
`;

const Content = styled.Text`
    font-weight: 500;
    font-size: 22px;
    margin-left: 4%;
    color: #92A8F8;
`;


export default function Approved({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <ScrollDiv bg="#fff">
        <Title>
            Thank you
        </Title>

        <Content>
            You've helped reduce waste by providing this item a new home.
        </Content>

      </ScrollDiv>

      <BottomNav gradientImg={WorkerGradient}
          GoHome={() => {navigation.navigate("Whomepage")}}
          GoListings={() => {navigation.navigate("Market")}}
          GoRequests={() => {navigation.navigate("Requests")}}
          GoProfile={() => {navigation.navigate("Profile")}}
      />
      
    </ThemeProvider>
  )

}

const styles = StyleSheet.create({
  map: {
    width: 396,
    height: 139,
    marginLeft: 15,
  },
});