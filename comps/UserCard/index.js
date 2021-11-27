import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

import Gradient from '../../assets/frefurnish-gradient.png'


export default function UserCard({
    descriptionText="default",
    userType="User",
    bg='gray100',
    setUser,
    GradImg={Gradient},
})
{
    const [pressed, setPressed] = useState(false);

    function Test()
    {
        setPressed(!pressed)
        console.log(pressed)
    }

    function handleButtonPress()
    {
        if(userType === 'Social Worker')
        {
            setUser('worker')
            setPressed(!pressed)
        } else if(userType === 'Donor'){
            setUser('donor')
            setPressed(!pressed)
        }
    }

    
    if(pressed === true)
    {
        return (
        <Button w='100%' bg='white' h={165} rounded={20} mt={15} mb={15} flexDir='column' onPress={handleButtonPress}>
            <Div
                w={396}
                h={165}
                bgImg={GradImg}
                justifyContent='center'
                alignItems='center'
                p="lg"
            >
                <Text fontSize={16} color='white' mt="xl">
                    {descriptionText}
                </Text>
            </Div>

            <Div
                w={396}
                h={38}
                bg='gray100'
                alignSelf='flex-end'
            >
                <Text pt='sm' pl="lg" fontWeight='600' fontSize={18}>
                    {userType}
                </Text>
            </Div>
        </Button>
    )}

    return (
        <Button w='100%' bg='white' h={165} rounded={20} mt={15} mb={15} flexDir='column' onPress={handleButtonPress}>
        <Div
            w={396}
            h={165}
            bg='gray100'
            justifyContent='center'
            alignItems='center'
            p="lg"
        >
            <Text fontSize={16} color='black' mt="xl">
                {descriptionText}
            </Text>
        </Div>

        <Div
            w={396}
            h={38}
            bgImg={GradImg}
            alignSelf='flex-end'
        >
            <Text pt='sm' pl="lg" fontWeight='600' fontSize={18} color='white'>
                {userType}
            </Text>
        </Div>
    </Button>
    )

}