import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

const Name = styled.Text`
font-size: 32px;
font-weight: bold;
color: black;
`
const Workplace = styled.Text`
font-size: 14px;
color: #7f7f7f;
`



export default function ProfileHeader({
    name='Julian Mayes',

    workPlace='Milieu - Children Family Services',
    profileImg = "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60 ",
    onPress = '',
    mb
})

{
    return(
        <Button 
        w="100%"
        flexDir="row"
        bg="#00000000"
       
        mb={mb}
        h={90}
        underlayColor="red100"
        rounded={10}
        onPress={onPress}
        >
            <Div
            justifyContent="center"
            alignItems="center"
            h={90}
            w="25%"
            >
                <Image
                h={90}
                w={90}
                m={10}
                rounded="circle"
                source={profileImg}
                ></Image>
            </Div>

            <Div
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
            ml={15}
            w="75%"
            h={90}
            >
                <Name>
                {name}
                </Name>

                <Workplace>
                {workPlace}
                </Workplace>



            </Div>

        </Button>
    )
}