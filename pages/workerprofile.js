import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components/native";
import { ScrollView, View, } from "react-native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../utils/initfb";
import { useFocusEffect } from "@react-navigation/core";

import ItemIcon from "../comps/ItemIcon";
import BottomNav from "../comps/BottomNavBar";
import BackButton from "../comps/backbutton";
import ProfileHeader from "../comps/ProfileHeader";
import MainButton from "../comps/MainButton";
import WorkerGradient from '../assets/worker-gradient.png';

import Julian from '../assets/julian.png'

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  } 

  const Wrapper = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `
const BigWrapper = styled.View`
flex: 1;
padding: 16px 16px 0 16px;
background-color: #FFF;
`
  const Container = styled.View`
    flex: 1;
  `

  const PersonInfoContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `

  const NameContainer = styled.View`
    
  `

  const Name = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: black;
  `

  const WorkplaceContainer = styled.View`

  `

  const Workplace = styled.Text`
    font-size: 14px;
    color: #7f7f7f;
  `

  const DescriptionTitleWrapper = styled.View`
    padding: 40px 0 0 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `

  const DescriptionTitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: black;
  `

  const DescriptionTextWrapper = styled.View`
    padding: 16px 0 0 0;
  `

const DescriptionText = styled.Text`
    font-size: 14px;
`

const LookingTitleWrapper = styled.View`
    padding: 40px 0 0 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `

const LookingTitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: black;
  `

const ItemWrapper = styled.View`
  padding: 16px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const RowCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Divider = styled.View`
  height: 40%;
`

const ButtonContainer = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`


export default function WorkerProfile({
  route,
  navigation,
  WorkerDescriptionText='Social worker working for Milieu - a social home trying to provide a better life for the disadvantaged. My goal is to better the lives as many people as possible. I love the work I do and it’s by the help of awesome donors that my goals are achievable. By working together, we can all make a difference for the better :)',

  WorkerCredentialsText='Somethig about credentials here',
  TimeInIndustry='Working for 3 years',
  ExperiencedIn='Working with disadvantaged children',
  EducationLevel=''

}) {

  const [prof, setProf] = useState(null)
 
  useFocusEffect(
    React.useCallback (() => {
    const GetData = async(fuid) => {
      const result = await axios.get('/users.php?fuid='+fuid);
      console.log(result.data)

      const storage = getStorage(app);
        for(var i =0; i<result.data.length; i++){
          try{
               console.log("try");
                const url = await getDownloadURL(ref(storage, `profileimg/item${result.data[i].fuid}.jpg`));
                  result.data[i].url = url;
                    console.log(url)
          } catch (e){
              result.data[i].url = null;
              continue;
          }
        }

      setUserInfo(result.data)
      setProf(result.data[0]);
    }

    const auth = getAuth();
    console.log(auth, "AUTH");
      /*onAuthStateChanged(auth, (u)=>{
          if(u){
              console.log(u)
              setUser(u);
          }
      })*/
      if(auth?.currentUser.uid){

        GetData(auth.currentUser.uid);
      }
  },[]))

  const HandleSignOut = () =>
  {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Signed Out")
      navigation.navigate('Landing')
    }).catch((error) => {
      // An error happened.
    });
  }

  const [visible, setVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState();
  if(prof === null)
  {
    return <>
    </>
  }
    return (
        <ThemeProvider theme={ffTheme}>
          <BigWrapper>
            <Container>
          <Wrapper>

          {/* {
            userInfo && userInfo.filter((x) => {return x.fuid === user.uid}).map((users) => (
              )
              )  
            } */}
            <ProfileHeader profileImg={prof.url ? {uri: prof.url} : Julian} name={prof.name} workPlace={prof.workplace} key={prof.id}/>
          </Wrapper>
          <DescriptionTitleWrapper>
            <DescriptionTitleText>Description</DescriptionTitleText>
       
          </DescriptionTitleWrapper>
          <DescriptionTextWrapper>
            <DescriptionText>
              {prof.description}
            </DescriptionText>
          </DescriptionTextWrapper>
          <DescriptionTitleWrapper>
            <LookingTitleText>
              Credentials
            </LookingTitleText>
          </DescriptionTitleWrapper>
          <DescriptionTextWrapper>
            <DescriptionText>
              {prof.credentials}
            </DescriptionText>
          </DescriptionTextWrapper>
            <DescriptionTitleWrapper>
            <LookingTitleText>
              Phone Number
            </LookingTitleText>
          </DescriptionTitleWrapper>
            <DescriptionTextWrapper>
            <DescriptionText>
              {prof.phone}
            </DescriptionText>
            </DescriptionTextWrapper>
        </Container>
      <ButtonContainer>
          <MainButton mt={10} buttonText={'Edit Profile'} bg="#B9C8FF"  iconName="" textColor='white' onPress={() => {navigation.navigate('EditWorkerProfile')}}/>
          <MainButton mt={10} buttonText={'Sign Out'} bg="#F2ABAB" iconName="" textColor='white' onPress={HandleSignOut}/>
      </ButtonContainer>
          </BigWrapper>
            <BottomNav gradientImg={WorkerGradient}
            GoHome={() => {navigation.navigate("Whomepage")}}
            GoListings={() => {navigation.navigate("Market")}}
            GoRequests={() => {navigation.navigate("Requests")}}
            GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
        </ThemeProvider>
    )
}
