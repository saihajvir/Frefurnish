import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import LottieView from 'lottie-react-native';
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Input} from 'react-native-magnus';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../utils/initfb";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import Header1 from "../comps/header";
import BigPost from "../comps/BigPost";
import DonorBottomNav from "../comps/DonorBottomNavBar";
import RequestCard from "../comps/RequestCard";
import ReqCardLarge from "../comps/ReqCardLarge";
import WorkerProfile from "../comps/ProfileHeader";
import HalfButton from "../comps/halfbutton";
import UserInput from "../comps/userinput";

import Michelle from '../assets/Michelle.jpg';
import Toaster from '../assets/toaster.jpg';
import Julian from '../assets/julian.png'
import Chair from '../assets/aeron.jpg';
import Adam from '../assets/adam.jpeg';
import DonorGradient from '../assets/donor-gradient.png';
import { useFocusEffect } from "@react-navigation/core";



const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000",
      salmon: "#EB8D8D",
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
padding: 20px 16px 20px 16px;
background-color: #FFFFFF;
`
const Container = styled.View`
flex:5;
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
const PersonInfoContainer = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 15px;
margin-top: 15px;
`
const NameContainer = styled.View`
align-items: center;
justify-content: center;
margin-left: 10px;
`
const Name = styled.Text`
font-size: 32px;
font-weight: bold;
color: black;
`

const Workplace = styled.Text`
font-size: 14px;
color: #7f7f7f;
`
const MessageCont = styled.View`
flex-direction: column;
margin-top: 50px;
height: 161px;
`
const MessageTitle = styled.Text`
font-size: 14px;
font-weight: bold;
color: black;
`
const MessageText = styled.Text`
font-size: 14px;
font-weight: 300;
color: black;
margin-top: 15px;
`
const Approve = styled.Text`
font-size: 14px;
font-weight: bold;
color: #6CAF61;
`
const Decline = styled.Text`
font-size: 14px;
font-weight: bold;
color: #E25C5C;
`
const ButtonCont = styled.View`
flex-direction: row;
margin-top: 140px;
justify-content: space-between;
`
const Title = styled.Text`
font-weight: 600;
font-size: 32px;
`
const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #EEAB93;
`
const MidText = styled.Text`
font-weight: 500;
font-size: 14px;
`
const SalmonText = styled.Text`
font-weight: 500;
font-size: 14px;
color: salmon;
`
const GreenText = styled.Text`
font-weight: 500;
font-size: 14px;
color: #6CAF61;
`
const Spacer = styled.View`
width: 100%;
height: 5%;
`
const FlexCont = styled.View`
flex: 1;
`
const FlexCont2 = styled.View`
flex: 4;
justify-content: center;
align-items: center;
display:flex;
`
const AnimCont1 = styled.View`
width: 70%;
height: 70%;
`

export default function Donorrequest({navigation, route})
{
  const [state, setState] = useState();
  const [ pendingReq, setPendingReq ] = useState(null);
  const [ meetingTime, setMeetingTime ] = useState();
  const [ user, setUser ] = useState(null);
  const {id} = route.params;
  
  console.log(id, "ID")


  async function handleApprovePress(){
    setState("approved")
    console.log(state)
    await PatchTime("approved");
  }

  async function handleDeclinePress(){
    setState("decline")
    await PatchTime("declined");
  }

  useFocusEffect(
    React.useCallback(() => {
    const GetData = async(fuid) => {
      const result = await axios.get('/requests.php?fuid='+fuid);

      const storage = getStorage(app);
      const filtered = result.data.filter((o)=>o.rid == id)
        for(var i =0; i<filtered.length; i++){
          try{
              //  console.log("try");
                const url = await getDownloadURL(ref(storage, `listing/item${filtered[i].listing_id}.jpg`));
                filtered[i].url = url;
                    // console.log(url)
          } catch (e){
            filtered[i].url = null;
              continue;
          }
        }
        setPendingReq(filtered[0]);

      // console.log(result.data, "RESULTS")
      // console.log(pendingReq, "STATUS")
      // console.log(getAuth().currentUser.uid, "GETAUTH()")
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
  },[]));

  const PatchTime = async(status) => {
    var Time = {
      id,
      meetingTime: meetingTime,
      status: status
    }

    const result = await axios.patch('./requests.php', Time)
    console.log(result)

  }

    
  if(pendingReq === null)
    {
      return <>
      </>
    }

    
if (state === "approved"){

return (
    <ThemeProvider theme={ffTheme}>         
      <Wrapper>
        <FlexCont>
              <Title>
                 Approved
              </Title>
        </FlexCont>
        <FlexCont>
          <ReqCardLarge pickupText={"Pick Up Scheduled:"} textColor={"#6CAF61"} itemImg={pendingReq.url ? {uri:pendingReq.url} : Chair} dateText={pendingReq.meetingTime}/>
        </FlexCont>
          <FlexCont/>
        <FlexCont>
              <MidText>
                Thank you! 
              </MidText>
                <MidText/>
              <MidText>
                You can expect to be contacted by the worker in the next few days to confirm more details about your donation.
              </MidText>
        </FlexCont>
          <FlexCont/>
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
  
if (state === "decline"){

return (
  <ThemeProvider theme={ffTheme}>
    <Wrapper>
      <FlexCont>
        <Title>
          Declined
        </Title>
      </FlexCont>
      <FlexCont>
        <MidText>Thank you, your listing will remain posted!</MidText>
      </FlexCont>
      <FlexCont2/>
      <FlexCont2/>
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

return ( 

      <ThemeProvider theme={ffTheme}>         
         <Wrapper>
            <Container>
                <WorkerProfile onPress={() => {navigation.navigate('ViewWorkerProfile')}} name={pendingReq.name} workPlace={pendingReq.workplace} profileImg={Michelle} ></WorkerProfile>
              <MessageText/>
              
                <ReqCardLarge itemImg={pendingReq.url ? {uri:pendingReq.url} : Chair} timeText="" dateText={pendingReq.listingName}/>
                <MessageCont>
                <MessageText/>
                  <MessageTitle>
                    A worker is interested in your item!
                  </MessageTitle>
                  <MessageText/>
                  <MessageText>
                  Enter a time and day for pick up then press<Approve> approve</Approve> to accept this request
                  </MessageText>
                  <MessageText/>
                 <Input onChangeText={(val)=>setMeetingTime(val)}>
                 </Input>
                 <MessageText/>
                  <MessageText>
                  Or press<Decline> decline</Decline> to decline and we'll keep your listing posted 
                  </MessageText>
                </MessageCont>
                
                <ButtonCont>
                  <HalfButton 
                  onPress={handleApprovePress} bg="#98C791" borderColor="#6CAF61" buttonText="Approve" >
                  </HalfButton>
                  <HalfButton
                  onPress={handleDeclinePress} bg="#EB8D8D"borderColor="#E25C5C" buttonText="Decline">
                  </HalfButton>
                </ButtonCont>
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

