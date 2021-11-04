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

export default function EditItems({route, navigation})
{
    return (
        <ThemeProvider theme={ffTheme}>
            <Div
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
            </Div>            
        </ThemeProvider>
    )

}