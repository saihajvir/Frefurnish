import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Skeleton } from 'react-native-magnus';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import app from "../utils/initfb";

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
    flex: ${props=>props.mflex};
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

export default function Whomepage({route, navigation, mflex='1'})
{

    const [listing, setListing] = useState(null);
    const [allRequests, setAllRequests] = useState(null);

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
        }
        
        const auth = getAuth();
        if(auth?.currentUser.uid)
        {
            GetData(auth.currentUser.uid);
        }
        console.log(listing)
    }, [])
    );

    if(listing === null && allRequests === null)
    {
        return <>
        <ThemeProvider theme={ffTheme}>
            <Wrapper>

                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>New Listings</Text>
                </NewListing>
                <Container mflex='1.5'>
                    <ScrollView horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
                        <Skeleton.Box w={165} h={230} mr={20}/>
                        <Skeleton.Box w={165} h={230} mr={20}/>
                        <Skeleton.Box w={165} h={230} mr={20}/>
                    </ScrollView>
                </Container>
                <MainButton buttonText={'See All Listings'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("Market")}}/>
                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>Requested Items</Text>
                </NewListing>
                <Container>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Div flexDir="row">
                            <Skeleton w={120} h={120} mr={20} />
                            <Skeleton w={120} h={120} mr={20} />
                            <Skeleton w={120} h={120} mr={20} />
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
        </>
    }

    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>

                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>New Listings</Text>
                </NewListing>
                <Container mflex='1.5'>
                    <ScrollView horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
                    {
                    listing.map((listings) => (
                        <BigPost
                            mr={15}
                            headerText={listings.listingName}
                            imgSrc={listings.url ? {uri:listings.url} : Chair}
                            locationText={listings.listingLocation}
                            key={listings.id}
                            onPress={()=>navigation.navigate('Viewlisting', {id:listings.id})}
                        />
                        )
                    )
                }
                    </ScrollView>
                </Container>
                <MainButton buttonText={'See All Listings'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("Market")}}/>
                <NewListing>
                    <Text fontWeight="600" fontSize={32} pt={20}>Requested Items</Text>
                </NewListing>
                <Container>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Div flexDir="row">
                        {
                            allRequests && allRequests.filter((reqs) => {return reqs.rstatus === "approved"}).map((requests, index) => {
                            return (
                                
                                    <ReqItem
                                        key={index}
                                        itemTitle={requests.listingName}
                                        itemStatus='Approved' itemOpacity={0.7}
                                        imgSrc={requests.url ? {uri:requests.url} : Chair}
                                        onpress={() => navigation.navigate('Requested'), {id:requests.rid}}
                                    />
                        )})}

                        {
                            allRequests && allRequests.filter((reqs) => {return reqs.rstatus === "declined"}).map((requests, index) => {
                            return (
                                
                                    <ReqItem
                                        key={index}
                                        itemTitle={requests.listingName}
                                        itemStatus='Declined'
                                        itemOpacity={0.7}
                                        imgSrc={requests.url ? {uri:requests.url} : Chair} 
                                        borderColor={"#EB8D8D"}
                                        bgColor={"#EB8D8D"}
                                        onpress={()=> navigation.navigate('Declined')}
                                    />
                                   
                        )})}

                        {
                            allRequests && allRequests.filter((reqs) => {return reqs.rstatus === "pending"}).map((requests, index) => {
                            return (
                                
                                <ReqItem
                                    key={index}
                                    itemTitle={requests.listingName}
                                    itemStatus='Pending'
                                    itemOpacity={0.7}
                                    borderColor={"#808080"}
                                    imgSrc={requests.url ? {uri:requests.url} : Chair}
                                    bgColor={"#808080"}
                                />
                        )})}
                      
                        
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
