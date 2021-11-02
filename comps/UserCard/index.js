import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';

import Gradient from '../../assets/frefurnish-gradient.png'

export default function UserCard({})
{
    return (
        <Button w={396} bg='white' h={165} rounded={20} flexDir='column'>
            <Div
                w={396}
                h={165}
                bgImg={Gradient}
                justifyContent='center'
                alignItems='center'
                p="lg"
            >
                <Text fontSize={16} color='white' mt="xl">
                    Social workers are individuals who are looking to find listings that will help improve or sustain the quality of life at the social home they work at. Social workers are the only type of user eligible to receive donations.
                </Text>
            </Div>

            <Div
                w={396}
                h={38}
                bg='white'
                alignSelf='flex-end'
            >
                <Text pt='sm' pl="lg" fontWeight='600' fontSize={18}>
                    Social Worker
                </Text>
            </Div>
        </Button>
    )
}