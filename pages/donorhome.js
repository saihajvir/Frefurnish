import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import DonorBottomNav from '../comps/DonorBottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import RequestCard from "../comps/RequestCard";

import Chair from '../assets/aeron.jpg'
import { NavigationRouteContext } from "@react-navigation/core";

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
const Container = styled.View`
    flex: ${props=>props.flex};
    justify-content: ${props=>props.justify};
    align-items: center;
    background-color: #FFFFFF;
`

export default function donorHome({route, navigation, flex='1', justify='center'})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Text pt={20} fontWeight="600" fontSize={32}>Item Requests</Text>
            <Container flex='0.6' justify='space-evenly'>
                    <RequestCard/>
                    <RequestCard/>
            <MainButton buttonText={'See All Requests'} bg="salmon" textColor='white'/>
            </Container>

            
            <Text fontWeight="600" fontSize={32}>Your Listings</Text>
            <Container flex='0.4' justify='center'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <SmallPost imgSrc={Chair} h={185} w={185} onPress={() => {navigation.navigate("donorListing")}}/>
                        <SmallPost imgSrc={Chair} h={185} w={185} onPress={() => {navigation.navigate("donorListing")}}/>
                        <SmallPost imgSrc={Chair} h={185} w={185} onPress={() => {navigation.navigate("donorListing")}}/>
                </ScrollView>
            </Container>
            </Wrapper>

            <DonorBottomNav 
                GoHome={() => {navigation.navigate('donorHome')}}
                GoListings={() => {navigation.navigate('NewListing')}}
                GoRequests={() => {navigation.navigate('Donorrequest')}}
                GoProfile={() => {navigation.navigate('DonorProfile')}}
            />
            
        </ThemeProvider>
    )
}
