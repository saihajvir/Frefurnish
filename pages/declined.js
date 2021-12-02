import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import LottieView from 'lottie-react-native';

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Avatar, Input, Image } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import Chair from '../assets/aeron.jpg'
import BigPost from "../comps/BigPost";
import MainButton from "../comps/MainButton";
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
`;

const Content = styled.Text`
    font-weight: 500;
    font-size: 22px;
    color: #92A8F8;
    margin-top: 20px;
`;

const Sub = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Wrapper = styled.View`
    flex: 1;
    padding: 20px 16px 20px 16px;
    background-color: #FFF;
`

const ScrollCont = styled.View`
  margin-bottom: 30px;

`
const AnimCont = styled.View`
width: 100%;
height: 15%;
justify-content: center;
align-items: center;

`

export default function Declined({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>
        <Div style={styles.container}>
          <Div>
            <Title>
              Your Request was Declined
            </Title>

            <Content>
              Unfortunately something went wrong along the way.
            </Content>
          </Div>
            <AnimCont>
              <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/sorry.json')} autoPlay loop ></LottieView>
            </AnimCont>
          <Div>
            <Sub>
              Here are some similar items that you may be interested in.
            </Sub>
            <ScrollCont>
            <ScrollDiv horizontal={true}>
              <Div style={styles.post}>
                <BigPost imgSrc={Chair} mr={15}/>
                <BigPost imgSrc={Chair} mr={15}/>
              </Div>
            </ScrollDiv>
            </ScrollCont>
            <MainButton bg="#B9C8FF" iconName='' buttonText="See Other Listings" onPress={() => navigation.navigate("Whomepage") }/>
          </Div>
        </Div>
      </Wrapper>
      <BottomNav gradientImg={WorkerGradient}
        GoHome={() => { navigation.navigate("Whomepage") }}
        GoListings={() => { navigation.navigate("Market") }}
        GoRequests={() => { navigation.navigate("Requests") }}
        GoProfile={() => { navigation.navigate("Profile") }}
      />

    </ThemeProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  post: {
    flexDirection: "row",
  }
});