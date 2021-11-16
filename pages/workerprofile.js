import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components/native";
import { ScrollView, View, } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import BottomNav from "../comps/BottomNavBar";
import ChangeProfile from "../comps/changeprofile";
import BackButton from "../comps/backbutton";

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
    flex: 0.5;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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


export default function WorkerProfile({route, navigation}) {
  const [visible, setVisible] = useState(false);

    return (
        <ThemeProvider theme={ffTheme}>
          <BigWrapper>
          <Wrapper>
            <Container>
              <Avatar
              bg="red300"  
              color="red800"
              size={70}
              >J</Avatar>
            </Container>
            <PersonInfoContainer>
              <NameContainer>
                <Name>Julian Mayes</Name>
              </NameContainer>
              <WorkplaceContainer>
                <Workplace>Milieu - Children Family Services</Workplace>
              </WorkplaceContainer>
            </PersonInfoContainer>
          </Wrapper>
          <DescriptionTitleWrapper>
            <DescriptionTitleText>Description</DescriptionTitleText>
            <BackButton buttonText="Edit" onPress={() => setVisible(true)}>
                
              </BackButton>
          </DescriptionTitleWrapper>
          <DescriptionTextWrapper>
            <DescriptionText>Social worker working for Milieu - a social home trying to provide a better life for the disadvantaged. My goal is to better the lives as many people as possible. I love the work I do and it’s by the help of awesome donors that my goals are achievable. By working together, we can all make a difference for the better :)</DescriptionText>
          </DescriptionTextWrapper>
          <LookingTitleWrapper>
            <LookingTitleText>Looking For</LookingTitleText>
            <BackButton
                buttonText="Edit" onPress={() => {navigation.navigate("EditItems")}}>
          
              </BackButton>
          </LookingTitleWrapper>
          <ItemWrapper>
            <RowCont>
              <ItemIcon/>
              <ItemIcon/>
              <ItemIcon/>
            </RowCont>
            <RowCont>
              <ItemIcon/>
            </RowCont>
          </ItemWrapper>

          <Modal isVisible={visible} bg='rgba(255,255,255, 0.3)'>
          <Button
            zIndex={1}
            bg="white"
            h={35}
            w={35}
            position="absolute"
            top={55}
            right={5}
            rounded="circle"
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon color="black" name="close" />
          </Button>
          <ChangeProfile
            onPress={() => {
              setVisible(false);
            }}
          >
          </ChangeProfile>
        </Modal>




            {/* <Div
            flexDirection="row"
            height={100}
            alignItems="center"
            justifyContent="flex-start"
            
            >
            <Div
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            ml={15}
            >
                <Avatar
                bg="red300"  
                color="red800"
                >J</Avatar>
            </Div>
            <Div
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            ml={15}
            ><Div>
                <Text
                fontSize={36}
                fontWeight="bold"
                color="black"
                >Julian Mayes</Text>
            </Div>
            <Div>
                <Text
                fontSize={14}
                color="#7f7f7f"
                >Milieu - Children Family Services</Text>
            </Div>
            </Div>
            </Div>


            <Div
            m={15}
            >
                <Text
                fontSize={24}
                fontWeight="500"
                color="black"
                >Description <Button buttonText="Edit" onPress={() => setVisible(true)}>
                Edit
              </Button>
                </Text>
                <Text
                mt="lg"
                fontSize={14}
                >Social worker working for Milieu - a social home trying to provide a better life for the disadvantaged. My goal is to better the lives as many people as possible. I love the work I do and it’s by the help of awesome donors that my goals are achievable. By working together, we can all make a difference for the better :)
                </Text>   
                <Div
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                >
                <Text
                mt="2xl"
                mb="lg"
                fontSize={24}
                fontWeight="500"
                color="black"
                >Looking For
                </Text>
                <BackButton
                buttonText="Edit" onPress={() => {navigation.navigate("EditItems")}}
                ></BackButton>
                </Div>
                <Div
                flexDirection="row"
                justifyContent="space-between"
                flexWrap="wrap"
                >
                    <ItemIcon />
                    <ItemIcon />
                    <ItemIcon />
                    <ItemIcon />
                </Div>
            </Div>
            <Div
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            >
                <BottomNav/>
            </Div>

        <Modal isVisible={visible}>
          <ChangeProfile
            onPress={() => {
              setVisible(false);
            }}
          >
          </ChangeProfile>
        </Modal> */}
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
