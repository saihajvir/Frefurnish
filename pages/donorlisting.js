import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';

import HalfButton from "../comps/halfbutton";
import MainPost from "../comps/MainPost";

import Chair from '../assets/aeron.jpg'
import DonorBottomNav from "../comps/DonorBottomNavBar";


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      salmon: "#EB8D8D",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px 0 16px;
  background-color: #FFF;
`
const NewListing = styled.View`
  flex:1;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 10px;
`
const Container = styled.View`
    flex:1;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 10px 0 0 0;
`
const BottomCont = styled.View`
    flex: 0.2;
    justify-content: space-between;
    flex-direction: row;
`

export default function donorListing({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <Wrapper>
            <Container>
                <MainPost imgSrc={Chair}/>
            </Container>

            <NewListing>
                <Text fontWeight="600" fontSize={24}>Condition</Text>
                <Text>Lightly Used</Text>
                <Text mt={10} fontWeight="600" fontSize={24}>Description</Text>
                <Text>Just an old office chair we don't use anymore. Prefer pickup! Thanks!</Text>
            </NewListing>

            <BottomCont>
                <HalfButton buttonText='Edit' borderColor='#00000000'/>
                <HalfButton buttonText='Delete' bg='salmon' borderColor='#00000000'/>
            </BottomCont>
        </Wrapper>

        <DonorBottomNav/>
    </ThemeProvider>
    )
}
