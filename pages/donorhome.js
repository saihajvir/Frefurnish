import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";



const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

const Requests = styled.View`
    padding: 10px 16px 0 16px;
    flex:0.5;
    background-color: #FFFFFF;
`
const Wrapper = styled.View`
    padding: 0 16px 0 16px;
    flex-direction: row;
    background-color: #FFFFFF;
`
const Container = styled.View`
    flex:0.5;
    flex-direction: row;
    padding: 0 10px 0 10px;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const RequestBox = styled.View`
    background-color: #92A8F8;
`

export default function donorHome({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Requests>
                <Text fontWeight="bold" fontSize={36}>Requests</Text>
                <RequestBox>
                    
                </RequestBox>
            </Requests>
            
            <Wrapper>
            <MainButton buttonText={'See All Requests'} bg="periwinkle" textColor='white'/>
            </Wrapper>

            <Wrapper>
            <Text fontWeight="bold" fontSize={36}>Your Listings</Text>
            </Wrapper>
            
            <Container>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                </ScrollView>
            </Container>


            <Wrapper>
            <Text fontWeight="bold" fontSize={36}>Past Donations</Text>
            </Wrapper>
            <Container>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("donorListing")}}>
                        <SmallPost/>
                    </TouchableOpacity>
                </ScrollView>
            </Container>

            <Navbar>
                <BottomNav />
            </Navbar>
        </ThemeProvider>
    )
}
