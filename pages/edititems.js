import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import MainButton from "../comps/MainButton";
import BottomNav from "../comps/BottomNavBar";

const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
  }

const Wrapper = styled.View`
    padding: 16px 16px 0 16px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

const TitleText = styled.Text`
    color: #92A8F8;
    font-size: 36px;
    font-weight: bold;
`

const YourItemsTitleWrapper = styled.View`
    padding: 40px 16px 0 16px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `

const YourItemsTitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: black;
  `

const AddItemsTitleWrapper = styled.View`
    padding: 40px 16px 0 16px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `

const AddItemsTitleText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: black;
  `

const ItemWrapper = styled.View`
    padding: 16px 16px 0 16px;
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

const ConfirmCont = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`

export default function EditItems({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Wrapper>
                <TitleText>Looking For</TitleText>
            </Wrapper>
            <YourItemsTitleWrapper>
                <YourItemsTitleText>Your Items</YourItemsTitleText>
            </YourItemsTitleWrapper>
            <ItemWrapper>
                <RowCont>
                    <ItemIcon/>
                    <ItemIcon/>
                    <ItemIcon/>
                </RowCont>
            </ItemWrapper>
            <AddItemsTitleWrapper>
                <AddItemsTitleText>Add Items</AddItemsTitleText>
            </AddItemsTitleWrapper>
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
            <ConfirmCont>
            <MainButton buttonText={'Confirm Changes'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("WorkerProfilePage")}}/>
                <BottomNav/>
            </ConfirmCont>
            
            
            
            {/* <Div
            m={15}
            >
                <Text
                color="periwinkle"
                fontSize={36}
                fontWeight="bold"
                >
                Looking For
                </Text>
                <Text
                mt="xl"
                mb="lg"
                fontSize={24}
                fontWeight="500"
                color="black"
                >Your Items
                </Text>
                <Div
                flexDirection="row"
                justifyContent="space-between"
                >
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                </Div>
                <Text
                mt="2xl"
                mb="lg"
                fontSize={24}
                fontWeight="500"
                color="black"
                >Add Items
                </Text>
                <Div
                flexDirection="row"
                justifyContent="space-between"
                flexWrap="wrap"
                >
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/>
                <ItemIcon itemHeight={80} itemWidth={80}/> 
                </Div>
            </Div>

            <Div
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            >
                <MainButton buttonText={'Confirm Changes'} bg="periwinkle" textColor='white' onPress={() => {navigation.navigate("WorkerProfilePage")}}/>
                <BottomNav/>
            </Div>             */}
        </ThemeProvider>
    )

}