import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import BigPost from "../comps/BigPost";
import { StatusBar } from "expo-status-bar";
import ReqItem from "../comps/ReqItem";

import Chair from '../assets/aeron.jpg';
import Toaster from '../assets/toaster.jpg';
import Table from '../assets/table.jpg';
import KitchenChairs from '../assets/kitchen-chairs.jpg';

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

const NewListing = styled.View`
  flex:0.3;
  background-color: #FFFFFF;
`

const Container = styled.View`
    flex: ${props=>props.flex};
    flex-direction: row;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:0.3;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`

export default function Whomepage({route, navigation, flex='1'})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>

                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>New Listings</Text>
                </NewListing>
                <Container flex='1.5'>
                    <ScrollView horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
                        <BigPost mr={15} imgSrc={Chair} onPress={() => {navigation.navigate("Viewlisting")}}/>
                        <BigPost mr={15} imgSrc={Table} onPress={() => {navigation.navigate("Viewlisting")}}/>
                        <BigPost mr={15} imgSrc={Table} onPress={() => {navigation.navigate("Viewlisting")}}/>
                        <BigPost mr={15} imgSrc={Table} onPress={() => {navigation.navigate("Viewlisting")}}/>
                    </ScrollView>
                </Container>
                <MainButton buttonText={'See All Listings'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("Market")}}/>
                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>Requested Items</Text>
                </NewListing>
                <Container>
                    <ScrollView horizontal={true}>
                        <Div flexDir="row">
                            <ReqItem itemOpacity={0.7} imgSrc={Toaster} onpress={() => {navigation.navigate("Requested")}}/>
                            <ReqItem itemOpacity={0.7} itemTitle={"Kitchen Chairs"} imgSrc={KitchenChairs} itemStatus={"Declined"} borderColor={"#EB8D8D"}onpress={() => {navigation.navigate("Requests")}}/>
                        </Div>
                    </ScrollView>
                </Container>
                <MainButton mb={20} buttonText={'See All Requests'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("Requests")}}/>
            </Wrapper>
            <BottomNav 
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
        </ThemeProvider>
    )
}
