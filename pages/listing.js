import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Input } from 'react-native-magnus';


import BottomNav from '../comps/BottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import UserInput from "../comps/userinput";
import ItemIcon from "../comps/ItemIcon";
import MainButton from "../comps/MainButton";

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Title = styled.Text`
  font-weight: 600;
  font-size: 36px;
  margin-bottom:10px;
`;

const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin-bottom:10px;
`;

export default function Listing({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
        <ScrollDiv>
      {/* <Div
       bg="#92A8F8"
       p={10}
       alignItems="center"
       >
        <BackButton buttonText="Back"/>
        <Text
        fontSize={24}
        fontWeight="500"
        color="#fff"
        >New Listing</Text>
      </Div> */}
      <Div pb={10}>
        <Title>
          Create a Listing
        </Title>
        <Input shadow="lg"
            placeholder="Title"
            focusBorderColor="blue700"
            mb={10}
            />
            <Input shadow="lg"
            placeholder="Category"
            focusBorderColor="blue700"
            mb={10}
            />
            <Input shadow="lg"
            placeholder="Pick-up or Drop Off?"
            focusBorderColor="blue700"
            mb={10}
            />
            <Input shadow="lg"
            placeholder="Location"
            focusBorderColor="blue700"

            />
      </Div>
      <Div pb={10}>
        <SubTitle>
          Add a Description
        </SubTitle>
          <Input />
      </Div>
      <Div>
        <SubTitle>
          Add Images
        </SubTitle>
          <ItemIcon itemText="" iconFamily="AntDesign" iconName="plus" />
      </Div>
      <Div 
      flexDir="row"
      flex={1}
      justifyContent="space-around"
      pt={10}
      pb={10}
      >
        <Input 
        w={100}
        h={137}
        />
        <Input 
        w={100}
        h={137}/>
        <Input 
        w={100}
        h={137}/>
      </Div>
      <MainButton buttonText="Publish" />
      <Div>
        <BottomNav />
      </Div>
      </ScrollDiv>
        </ThemeProvider>
    )

}