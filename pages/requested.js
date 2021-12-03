import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Avatar, Input } from 'react-native-magnus';
import MapView from 'react-native-maps';
import { useFocusEffect } from "@react-navigation/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../utils/initfb";

import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import SmallPost from "../comps/SmallPost";
import { StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import LottieView from "lottie-react-native";
import MainButton from "../comps/MainButton";
import Michelle from '../assets/Michelle.jpg'
import Adam from '../assets/Adam.jpg'

import Chair from '../assets/aeron.jpg'
import HalfButton from "../comps/halfbutton";
import ConfirmOverlay from "../comps/ConfirmOverlay";
import WorkerGradient from '../assets/worker-gradient.png';

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000",
      salmon: "#EB8D8D",
    }
  }

const Title = styled.Text`
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 5%;

`;

const Pickup = styled.Text`
    font-weight: 500;
    font-size: 20px;
    color: rgba(108, 175, 97, 0.7);
`;

const Time = styled.Text`
    font-weight: 600;
    font-size: 20px;
`;

const Sub = styled.Text`
  font-weight: 500;
  font-size: 32px;
  padding: 10px 0 10px 0;
`;

const Info = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;

const Location = styled.Text`
    font-weight: 500;
    font-size: 14px;
    margin-top: 2%;
    margin-bottom: 1%;
`;

const Container = styled.View`
    flex: ${props=>props.mflex};
    justify-content: center;
`
const InfoContainer = styled.View`
    flex: ${props=>props.mflex};
    justify-content: center;
    margin-top: 30px;
`
const Wrapper = styled.View`
  flex: 1;
  padding: 20px 16px 0 16px;
  background-color: #FFF;
`
const AnimCont1 = styled.View`
width: 50%;
height: 50%;
`
const MidText = styled.Text`
font-weight: 500;
font-size: 14px;

`;

const FlexCont = styled.View`
flex: 1;

`
const FlexCont2 = styled.View`
flex: 4;
justify-content: flex-start;
align-items: center;

`

const Content = styled.Text`
font-weight: 500;
font-size: 22px;
color: #92A8F8;
`;
const SalmonText = styled.Text`
font-weight: 500;
font-size: 14px;
color: salmon;
`;



export default function Requested({
    route,
    navigation,
    flex='1'
}) {

    const {id} = route.params;
    const [yes, setYes] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [pendingReq, setPendingReq] = useState(null);
    const [user, setUser] = useState();

    useFocusEffect(
        React.useCallback(() => {
        const GetData = async(fuid) => {
          const result = await axios.get('/requests.php?fuid='+fuid);
    
          const storage = getStorage(app);
            for(var i =0; i<result.data.length; i++){
              try{
                  //  console.log("try");
                    const url = await getDownloadURL(ref(storage, `listing/item${result.data[i].listing_id}.jpg`));
                      result.data[i].url = url;
                        // console.log(url)
              } catch (e){
                  result.data[i].url = null;
                  continue;
              }
            }
            setPendingReq(result.data[0]);
    
          // console.log(result.data, "RESULTS")
          console.log(pendingReq, "STATUS")
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
    function HandleDeletePress()
    {
        setOverlayVisible(false)
        if(overlayVisible===false)
        {
            navigation.navigate('Requests');
        }
    }
    async function HandleYesPress()
    {
        await PatchYes("complete");
        setYes(true);
    }

    const PatchYes = async(status) => {
        var Complete = {
          id,
          status: status
        }
    
        const result = await axios.patch('./requests.php', Complete)
        console.log(result)
      }
    
    if(pendingReq === null)
    {
        return<>
        </>
    }
    
    if (yes === true){
        return (
      
          <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <FlexCont>
                      <Title>
                          Thank you
                      </Title>
                      <Content>
                          You’ve helped reduce waste and provided furniture to a home in need
                      </Content>
                </FlexCont>
                <FlexCont>
                </FlexCont>
                <FlexCont2>
                    <AnimCont1>
                        <LottieView style={{display: "flex", justifyContent:"center", alignItems: "center",}} source={require('../assets/worker-home.json')} autoPlay loop ></LottieView>
                    </AnimCont1>
                </FlexCont2>
            </Wrapper>
            <BottomNav gradientImg={WorkerGradient}
                GoHome={() => { navigation.navigate("Whomepage") }}
                GoListings={() => { navigation.navigate("Market") }}
                GoRequests={() => { navigation.navigate("Requests") }}
                GoProfile={() => { navigation.navigate("WorkerProfile") }}
            />
          </ThemeProvider>
        )
      }

    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <Title>Your {pendingReq.pickup} was Approved</Title>
                <Div style={styles.scheduled}>
                    <Div style={styles.scheduled_text}>
                        <Pickup>{pendingReq.pickup} Scheduled:</Pickup>
                        <Div>
                        <Time>{pendingReq.meetingTime}</Time>
                        </Div>
                    </Div>
                    <Div>
                        <Image 
                        source={pendingReq.url ? {uri:pendingReq.url} : Chair}
                        style={styles.img}
                        />
                    </Div>
                </Div>
                <InfoContainer flex={flex}>
                <Sub>Contact Info</Sub>
                <Div style={styles.info}>
                    <Div style={styles.info_left}>
                    <Avatar
                        mr={10}
                        size={50}
                        source={Adam}
                    />
                        <Info>
                            {pendingReq.dname}
                        </Info>
                    </Div>
                    <Div style={styles.number} >
                        <Info>
                            {pendingReq.dphone}
                        </Info>
                    </Div>
                </Div>
                {/* <Location>
                    {pendingReq.daddress}
                </Location> */}
                </InfoContainer>
                
                <Container mflex='1.5'>
                </Container>

                <Container flex={flex}>
                <Location>
                    Have you picked up this item?
                </Location>
                <Div style={styles.choice} mflex='1'>
                    <HalfButton buttonText="Yes" bg="#98C791" borderColor='#6CAF61' onPress={HandleYesPress}/>
                    <HalfButton buttonText="No Longer Interested" bg="#EB8D8D" borderColor='#E25C5C' onPress={() => {setOverlayVisible(true)}} />
                </Div>
                </Container>
            </Wrapper>

            <ConfirmOverlay visible={overlayVisible} removeOverlay={() => {setOverlayVisible(false)}} onDeletePress={() => {navigation.navigate("Requests")}}/>
            <BottomNav gradientImg={WorkerGradient}
                GoHome={() => { navigation.navigate("Whomepage") }}
                GoListings={() => { navigation.navigate("Market") }}
                GoRequests={() => { navigation.navigate("Requests") }}
                GoProfile={() => { navigation.navigate("WorkerProfile") }}
            />

        </ThemeProvider>
    )

}

const styles = StyleSheet.create({
    map: {
        width: 396,
        height: 200,
    },

    img:{
        width:177,
        height: 177,
        borderRadius:10,
    },
    
    scheduled:{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "5%",
    },

    scheduled_text:{
        justifyContent:"space-between",
    },

    info:{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: "4%",
    },

    info_left:{
        alignItems: "center",
        flexDirection: "row",
    },
    
    number:{
    },

    choice:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
        flex: 1,
    },
});