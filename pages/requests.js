import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv,  Avatar, Input, Image } from 'react-native-magnus';
import MapView from 'react-native-maps';


import BottomNav from '../comps/BottomNavBar';
import RequestCard from "../comps/RequestCard";
import ReqCardLarge from "../comps/ReqCardLarge";
import FilterButton from "../comps/FilterButton";
import SmallPost from "../comps/SmallPost"
import ReqItem from "../comps/ReqItem";


import { StyleSheet, ScrollView, Dimensions } from "react-native";

import Chair from '../assets/aeron.jpg';
import Toaster from '../assets/toaster.jpg';
import Couch from '../assets/sofa.jpg';
import Table from '../assets/table.jpg';
import Shelf from '../assets/bookshelf.jpg';
import KitchenChairs from '../assets/kitchen-chairs.jpg';




const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000",
    green: "#98C791",
    red: "#EB8D8D",
    grey: "#808080"
  }
}

const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`


export default function Requests({ route, navigation }) {
  return (
    <ThemeProvider theme={ffTheme}>
        <Wrapper>
        {/* <RequestCard /> */}
        {/* <ReqCardLarge /> */}
        {/* <FilterButton /> */}
        {/* <ReqItem  /> */}

        <Text fontWeight="bold" fontSize={30} mt={20} mb={10} color="#98C791">Approved</Text>
        <ScrollView horizontal={true}>
            <Div flexDir="row">
                <ReqItem itemOpacity={0} imgSrc={Toaster} onpress={()=>{navigation.navigate("Requested")}}/>
            </Div>
        </ScrollView>

        <Text fontWeight="bold" fontSize={30} mb={10}color="#EB8D8D">Declined</Text>
        <ScrollView horizontal={true} >
            <Div flexDir="row" >
            <ReqItem itemTitle={"Kitchen Chairs"} itemOpacity={0} borderColor={"#EB8D8D"} imgSrc={KitchenChairs} bgColor={"#EB8D8D"} onpress={() => {navigation.navigate('Declined')}}/>
            <ReqItem itemTitle={"Dinner Table"} itemOpacity={0} borderColor={"#EB8D8D"}
            imgSrc={Table} bgColor={"#EB8D8D"}/>
            </Div>
        </ScrollView>

        <Text fontWeight="bold" fontSize={30} mb={10}color="#808080">Pending</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Div flexDir="row">
            <ReqItem itemTitle={"Office Chair"} itemOpacity={0} borderColor={"#808080"} imgSrc={Chair} bgColor={"#808080"}/>
            <ReqItem itemTitle={"2 Seat Couch"} itemOpacity={0} borderColor={"#808080"} imgSrc={Couch} bgColor={"#808080"}/>
            <ReqItem itemTitle={"Book Shelf"} itemOpacity={0} borderColor={"#808080"} imgSrc={Shelf} bgColor={"#808080"}/>
            </Div>
  </ScrollView>

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

const styles = StyleSheet.create({
  map: {
    width: 396,
    height: 139,
    marginLeft: 15,
  },
});