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

import Chair from '../assets/aeron.jpg';
import Julian from '../assets/julian.png';
import Toaster from '../assets/toaster.jpg';
import Adam from '../assets/adam.jpeg';

import { NavigationRouteContext } from "@react-navigation/core";
import { getAuth, useAuth, onAuthStateChanged } from "firebase/auth";

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
    flex: ${props=>props.mflex};
    justify-content: ${props=>props.justify};
    align-items: center;
    background-color: #FFFFFF;
`
const TextCont = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`

const fakeData = [
    {
      id:1,
      title:"Test Title 1",
      description:"Test Desc 1",
      movie_banner:"https://placekitten.com/1000/1200"
    },
  
    {
      id:2,
      title:"Test Title 2",
      description:"Test Desc 2",
      movie_banner:"https://placekitten.com/2000/1200"
    }
  ]


export default function donorHome({route, navigation, mflex='1', justify='center'})
{
    const [user, setUser] = useState(null);
    const [listing, setListing] = useState();
    // const listArray = []
    useEffect(() => {
        const GetData = async() => {
            const result = await axios.get('/listings.php');
            // console.log(result.data)

            setListing(result.data)

            // const listData = result.data
            // // console.log(listData)

            // for (let i =0 ; i< listData.length; i++)
            // {
            //     listArray.push(listData[i].listingName)
            //     // console.log(listData[i].listingName)
                
            // }
            // console.log(listArray[0])
        }
        const auth = getAuth()
        onAuthStateChanged(auth, (u)=>{
            if(u){
                console.log(u)
                setUser(u);
            }
        })
        GetData();
        // console.log(listing)–
    }, [])
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Text pt={20} fontWeight="600" fontSize={32}>Item Requests</Text>
            <Container mflex='0.6' justify='space-evenly'>
            <RequestCard  pickupText="Pick Up Request"nameText="Adam Sandler" timeText="Office Chair" dateText=""profileImg={Adam} itemImg={Chair} onpress={() => {navigation.navigate('ItemRequests')}}/>
                    <RequestCard pickupText={"Pick Up Scheduled:"} fontColor="#6CAF61" profileImg={Julian} itemImg={Toaster} onpress={() => {navigation.navigate('ReqSchedule')}}/>
            <MainButton buttonText={'See All Requests'} bg="salmon" iconName=""textColor='white'onPress={() => {navigation.navigate('Donorrequest')}}/>
            </Container>

            <TextCont>
            <Text fontWeight="600" fontSize={32}>Your Listings</Text>
            </TextCont>
            <Container mflex='0.4' justify='space-evenly'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    listing && listing.filter((x) => {return  x.fuid === user.uid}).map((listings) => (
                        <SmallPost
                            h={185}
                            w={185}
                            mr={10}
                            headerText={listings.listingName}
                            imgSrc={Chair}
                            locationText={listings.listingLocation}
                            key={listings.id}
                            onPress={()=>navigation.navigate('donorListing', {id:listings.id})}
                        />
                        )
                    )
                } 
        
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
