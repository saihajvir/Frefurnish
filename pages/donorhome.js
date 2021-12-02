import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv } from 'react-native-magnus';
import app from "../utils/initfb";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
import DonorGradient from '../assets/donor-gradient.png';

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
const ButtonContainer = styled.View`
    flex: 0.1;
    justify-content: center;
    align-items: center;
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
    const [listing, setListing] = useState(null);
    const [allRequests, setAllRequests] = useState(null);
    // const listArray = []
    useFocusEffect(
        React.useCallback(() => {
            const GetData = async(fuid) => {
                const result = await axios.get('/listings.php');
                const requestsResult = await axios.get('/requests.php?fuid='+fuid);
                // console.log(result.data)

                const storage = getStorage(app);
                for(var i =0; i<result.data.length; i++){
                    try{
                        console.log("try");
                        const url = await getDownloadURL(ref(storage, `listing/item${result.data[i].id}.jpg`));
                        result.data[i].url = url;
                        console.log(url)
                    } catch (e){
                        result.data[i].url = null;
                        continue;
                    }

                    
                }
                for(var i =0; i<requestsResult.data.length; i++){
                    try{
                        console.log("try");
                        const url = await getDownloadURL(ref(storage, `listing/item${requestsResult.data[i].listing_id}.jpg`));
                        requestsResult.data[i].url = url;
                        console.log(url)
                    } catch (e){
                        requestsResult.data[i].url = null;
                        continue;
                    }

                    
                }
                setListing(result.data)
                setAllRequests(requestsResult.data)
                console.log(result.data, "RESULT")
                console.log(allRequests, "REQUEST DATA")
                console.log(fuid, "THE FUID")
              
            }
            const auth = getAuth()
            onAuthStateChanged(auth, (u)=>{
                if(u){
                    console.log(u)
                    setUser(u);
                }
            })
            if(auth?.currentUser.uid){
                GetData(auth.currentUser.uid);
              }
            // console.log(listing)–
        }, [])
    );
    if(listing === null && allRequests === null)
    {
        return <>
        </>
    }
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Text pt={20} fontWeight="600" fontSize={32}>Item Requests</Text>
            <Container mflex='0.5' justify='flex-start'>
            <ScrollView>
            {
                allRequests && allRequests.filter((reqs) => {return reqs.rstatus === "approved"||reqs.rstatus === "pending"  }).map((requests, index) => {
                return (
                    <RequestCard
                        key={index}
                        nameText={requests.wname}
                        companyText={requests.workplace}
                        timeText={requests.meetingTime}
                        listingName={requests.listingName}
                        profileImg={Adam}
                        itemImg={requests.url ? {uri:requests.url} : Chair}
                        onpress={() => navigation.push('ItemRequests', {id:requests.rid})}
                    />
                )}
                )
            }
            </ScrollView>
            </Container>
            <ButtonContainer>
                <MainButton buttonText={'See All Requests'} bg="#F2ABAB" iconName="" textColor='white'onPress={() => {navigation.navigate('Donorrequest')}}/>
            </ButtonContainer>
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
                            imgSrc={listings.url ? {uri:listings.url} : Chair}
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

            <DonorBottomNav gradientImg={DonorGradient}
                GoHome={() => {navigation.navigate('donorHome')}}
                GoListings={() => {navigation.navigate('NewListing')}}
                GoRequests={() => {navigation.navigate('Donorrequest')}}
                GoProfile={() => {navigation.navigate('DonorProfile')}}
            />
            
        </ThemeProvider>
    )
}
