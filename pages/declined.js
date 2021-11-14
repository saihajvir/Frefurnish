import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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

const Sub = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-left: 4%;
`;

export default function Declined({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
      <ScrollDiv bg="#fff">
        <Div style={styles.container}>
          <Div>
            <Title>
              Try Again
            </Title>

            <Content>
              Unfortunately something went wrong along the way.
            </Content>
          </Div>
          <Div>
            <Sub>
              Here are some similar items that you may be interested in.
            </Sub>
            <ScrollDiv horizontal={true}>
              <Div style={styles.post}>
                <BigPost />
                <BigPost />
              </Div>
            </ScrollDiv>
            <MainButton buttonText="See All Listing" />
          </Div>
        </Div>
      </ScrollDiv>

      <BottomNav
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