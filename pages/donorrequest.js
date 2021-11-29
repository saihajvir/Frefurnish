import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import BigPost from "../comps/BigPost";
import DonorBottomNav from "../comps/DonorBottomNavBar";
import RequestCard from "../comps/RequestCard";
import ReqCardLarge from "../comps/ReqCardLarge";

import Chair from '../assets/aeron.jpg';
import Toaster from '../assets/toaster.jpg';
import Julian from '../assets/julian.png';
import Adam from '../assets/adam.jpeg';


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

  const Header = styled.View`
  flex:0.6;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`
const NewListing = styled.View`
  flex: 2;
  background-color: #FFFFFF;
`
const Wrapper = styled.View`
flex: 1;
padding: 0 16px 0 16px;
background-color: #FFF;
`
const Container = styled.View`
    flex: 1;
    flex-direction: column;
   
    
    background-color: white;
`
const Heading = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`
const ReqCont = styled.View`
  flex: 1;
  margin-top: 25px;
  background-color: #FFFFFF;
`



export default function Donorrequest({navigation})
{
  const [ pendingReq, setPendingReq ] = useState(null);

  useEffect(() => {
    const GetData = async(fuid) => {
      const result = await axios.get('/requests.php?fuid='+fuid);

      setPendingReq(result.data);
      console.log(result.data, "RESULTS")
      // console.log(pendingReq, "STATUS")
      // console.log(getAuth().currentUser.uid, "GETAUTH()")
      console.log(pendingReq, "PENDING REQ")
    }
    const auth = getAuth();
    // console.log(auth, "AUTH");

      if(auth?.currentUser.uid){
        GetData(auth.currentUser.uid);
      }
  },[])

    if(pendingReq === null)
    {
      return <>
      </>
    }
    return (
        <ThemeProvider theme={ffTheme}>
         
            <Wrapper>
            <Container >
              
                <Heading>
                    <Text fontWeight="600" fontSize={32} pt={20}>New Requests</Text>

                  <ReqCont>
                  <RequestCard nameText='Adam Sandler' timeText="4:30pm" dateText="November 5th" profileImg={Adam} itemImg={Chair} onpress={() => {navigation.navigate('ItemRequests')}}/>

                    {/* {
                      pendingReq && pendingReq.filter((pend) => {return pend.status === 'pending' && pend.fuid === getAuth().currentUser.uid}).map((requests) => (
                        
                        <RequestCard nameText={requests.wname} timeText="4:30pm" dateText="November 5th" profileImg={Adam} itemImg={Chair} onpress={() => {navigation.navigate('ItemRequests')}}/>
                
                      ))
                    } */}
                  </ReqCont>

                </Heading>

                <Heading>
                    <Text fontWeight="600" fontSize={32} pt={20}>Scheduled Pick Ups</Text>
                <ReqCont>
                    <RequestCard profileImg={Julian} itemImg={Toaster} pickupText={"Pickup Scheduled:"} fontColor="#6CAF61" onpress={() => {navigation.navigate('ReqSchedule')}}/>
                </ReqCont>
                </Heading>

            
          
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