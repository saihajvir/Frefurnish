import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input, } from 'react-native-magnus';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Header = styled.View`
  flex:0.2;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex:0.3;
  flex-direction: row;
  background-color: #FFFFFF;
`
const Container = styled.View`
    flex:3;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Navbar = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export default function Market({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <ScrollView>
            <NewListing>
                <Text fontWeight="bold" fontSize={50} pt={20}>All Listings</Text>
                <Input placeholder="search" w={180} h={40} m={25}/>
            </NewListing>
            
            <Container>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="http://placeimg.com/640/480/tech" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/200/300"/>
            </TouchableOpacity>
            </Container>
            <Container>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/200/500"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/200/400"/>
            </TouchableOpacity>
            </Container>
            <Container>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/200/600"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/400/300"/>
            </TouchableOpacity>
            </Container>
            <Container >
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/600/300"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/800/300"/>
            </TouchableOpacity>
            </Container>
            <Container>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/100/900"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/700/300"/>
            </TouchableOpacity>
            </Container>
            <Container>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/100/100"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Viewlisting")}}>
                <SmallPost imgSrc="https://picsum.photos/900/900"/>
            </TouchableOpacity>
            </Container>
            </ScrollView>
           <Div h={50}>
           <Navbar>
                <BottomNav />
            </Navbar>
           </Div>
        </ThemeProvider>
    )
}