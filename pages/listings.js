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

import KChairs from '../assets/kitchen-chairs.jpg'
import Chair from '../assets/aeron.jpg'
import Table from '../assets/table.jpg'
import Sofa from '../assets/sofa.jpg'
import Julian from '../assets/julian.png'
import Bookshelf from '../assets/bookshelf.jpg'
import Toaster from '../assets/toaster.jpg'

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

export default function Market({route, navigation})
{
    const [listing, setListing] = useState(fakeData);

    useEffect(() => {
        const GetData = async() => {
            const result = await axios.get('/listings.php');
            // console.log(result.data)

            setListing(result.data)
        }
        
        GetData();
        console.log(listing)
    }, [])

    return (
        <ThemeProvider theme={ffTheme}>
            <ScrollView>
            <Wrapper>
            <NewListing>
                <Text fontWeight="600" fontSize={36} pt={20}>All Listings</Text>
                <Input placeholder="Search" w={180} h={40} m={25}/>
            </NewListing>
            
            
            <Container>
                {
                    listing.map((listings) => (
                        <SmallPost
                            h={185}
                            w={185}
                            headerText={listings.listingName}
                            imgSrc={Chair}
                            locationText={listings.listingLocation}
                            key={listings.id}
                            onPress={()=>{navigation.navigate('Viewlisting')}}
                        />
                        )
                    )
                }
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
    )
}