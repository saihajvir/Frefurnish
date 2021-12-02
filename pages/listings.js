import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input, Skeleton, } from 'react-native-magnus';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../utils/initfb";

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";

import KChairs from '../assets/kitchen-chairs.jpg';
import Chair from '../assets/aeron.jpg';
import Table from '../assets/table.jpg';
import Sofa from '../assets/sofa.jpg';
import Julian from '../assets/julian.png';
import Bookshelf from '../assets/bookshelf.jpg';
import Toaster from '../assets/toaster.jpg';
import WorkerGradient from '../assets/worker-gradient.png';

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
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const Navbar = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`

export default function Market({route, navigation})
{
    const [listing, setListing] = useState(null);

    useEffect(() => {
        const GetData = async() => {
            const result = await axios.get('/listings.php');
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

            setListing(result.data)
        }
        
        GetData();
        console.log(listing)
    }, [])

    if(listing === null) 
    {
        return<>
        <ThemeProvider theme={ffTheme}>
            <ScrollView>
            <Wrapper>
            <NewListing>
                <Text fontWeight="600" fontSize={36} pt={20} mb={15}>All Listings</Text>
            </NewListing>
            
            
            <Container>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
                <Skeleton.Box w={180} h={180} mb={20}/>
            </Container>

        
            </Wrapper>
            </ScrollView>
            
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
            <ScrollView>
            <Wrapper>
            <NewListing>

                <Text fontWeight="600" fontSize={36} pt={20} mb={15}>All Listings</Text>

            </NewListing>
            
            
            <Container>
                {
                    listing.map((listings) => (
                        <SmallPost
                            h={185}
                            w={185}
                            headerText={listings.listingName}
                            imgSrc={listings.url ? {uri:listings.url} : Chair}
                            locationText={listings.listingLocation}
                            key={listings.id}
                            onPress={()=>navigation.navigate('Viewlisting', {id:listings.id})}
                        />
                        )
                    )
                }
            </Container>

        
            </Wrapper>
            </ScrollView>
            
            <BottomNav gradientImg={WorkerGradient}
            GoHome={() => {navigation.navigate("Whomepage")}}
            GoListings={() => {navigation.navigate("Market")}}
            GoRequests={() => {navigation.navigate("Requests")}}
            GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
        </ThemeProvider>
    )
}