import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../utils/initfb";

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import SmallPost from "../comps/SmallPost";
import BackButton from "../comps/backbutton";
import HalfButton from "../comps/halfbutton";
import BigPost from "../comps/BigPost";
import MainPost from "../comps/MainPost";
import ReqCardLarge from "../comps/ReqCardLarge";

import Chair from '../assets/aeron.jpg'

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }


const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px 0 16px;
  background-color: #FFF;
`
const NewListing = styled.View`
  flex:1;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
`
const Container = styled.View`
  flex:1;
  flex-direction: row;
  background-color: #FFFFFF;
`
const BottomCont = styled.View`
  flex: 0.2;
  justify-content: space-between;
  flex-direction: row;
`
const FlexCont = styled.View`
  flex: 1;
`
const MidText = styled.Text`
  font-weight: 500;
  font-size: 14px;
`
const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`
const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #92A8F8;
padding: 10px 0 0 ;
`;


export default function Viewlisting({
  route,
  navigation,
  conditionText='Lightly Used',
  descriptionText="Just an old office chair we don't use anymore. Prefer pickup! Thanks!",
  pickOrDrop='Pickup Only',
  locationText='Location'
})
{
    const [requested, setRequested] = useState(false); 
    const {id} = route.params;
    console.log(id)
    console.log(requested)

    const [listingData, setListingData] = useState(null);

    const AddRequest = async() => {
      const listing_id = id;
      const fuid = getAuth().currentUser.uid;
      const status = 'pending';

      const result = await axios.post('/requests.php', {
        listing_id, fuid, status
      })
      setRequested(true);
      console.log('added request')
    }
 
    useEffect(() => {
      const GetData = async(id) => {
        const result = await axios.get('/listings.php?id='+ id);
        console.log(result.data)

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
        // setUserInfo(result.data)
        setListingData(result.data[0]);
        console.log(listingData.listingName, "LISTING DATA")
      }
      
      GetData(id);
        
    },[])

    if(listingData === null){
      return<>
      </>
    }

    if(requested === true)
    {
        return (
            <ThemeProvider theme={ffTheme}>         
            <Wrapper>
              <FlexCont>
                    <Title>
                       Thank you
                    </Title>
                  <Content>
                      Your pick up request was sent and is now pending approval from the donor.
                  </Content>
              </FlexCont>
              <FlexCont>
                <ReqCardLarge pickupText={"Pick Up Requested"} textColor={"#6CAF61"} itemImg={Chair} timeText='Time Pending Donor Approval' dateText=''/>
              </FlexCont>
                <FlexCont/>
              <FlexCont>
                    <MidText>
                        You can check your request’s status by tapping the request icon in the menu.
                    </MidText>
              </FlexCont>
                <FlexCont/>
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
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
            <Container>
                <MainPost headerText={listingData.listingName} imgSrc={listingData.url ? {uri:listingData.url} : Chair} locationText={listingData.listingLocation}/>
            </Container>

            <NewListing>
                <Text fontWeight="600" fontSize={24}>Condition</Text>
                <Text>{listingData.listingCondition}</Text>
                <Text mt={10} fontWeight="600" fontSize={24}>Description</Text>
                <Text>{listingData.listingDescription}</Text>
                <Text mt={10} fontWeight="600" fontSize={24}>{listingData.pickup}</Text>
            </NewListing>

            <BottomCont>
                <MainButton mb={10} buttonText="Request Item" onPress={AddRequest}/> 
            </BottomCont>
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