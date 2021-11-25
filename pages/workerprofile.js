import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components/native";
import { ScrollView, View, } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import BottomNav from "../comps/BottomNavBar";
import ChangeProfile from "../comps/ChangeProfile";
import BackButton from "../comps/backbutton";
import ProfileHeader from "../comps/ProfileHeader";
import MainButton from "../comps/MainButton";

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

  WorkerCredentialsText='Yap Season',
  TimeInIndustry='Working for 3 years',
  ExperiencedIn='Working with disadvantaged children',
  EducationLevel=''

}) {
  const GetData = async() => {
    const result = await axios.get('/users.php');
    console.log(result.data)
  }

  const [visible, setVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

    return (
        <ThemeProvider theme={ffTheme}>
          <BigWrapper>
            <Container>
          <Wrapper>
            <ProfileHeader profileImg={Julian}/>
          </Wrapper>
          <DescriptionTitleWrapper>
            <DescriptionTitleText>Description</DescriptionTitleText>
       
          </DescriptionTitleWrapper>
          <DescriptionTextWrapper>
            <DescriptionText>{WorkerDescriptionText}</DescriptionText>
          </DescriptionTextWrapper>
          <DescriptionTitleWrapper>
            <LookingTitleText>
              Credentials
            </LookingTitleText>
          </DescriptionTitleWrapper>
          <DescriptionTextWrapper>
            <DescriptionText>
              {WorkerCredentialsText}
            </DescriptionText>
          </DescriptionTextWrapper>
          <ChangeProfile visible={overlayVisible}/>
        </Container>
      <ButtonContainer>
          <MainButton buttonText={'axios'} bg="periwinkle" iconName=""textColor='white'onPress={GetData}/>

          <MainButton mt={10} buttonText={'Edit Profile'} bg="periwinkle" iconName=""textColor='white'onPress={() => {navigation.navigate('EditWorkerProfile')}}/>
      </ButtonContainer>
          </BigWrapper>
            <BottomNav 
                GoHome={() => {navigation.navigate("Whomepage")}}
                GoListings={() => {navigation.navigate("Market")}}
                GoRequests={() => {navigation.navigate("Requests")}}
                GoProfile={() => {navigation.navigate("WorkerProfile")}}
            />
        </ThemeProvider>
    )
}
