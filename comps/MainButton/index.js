import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Button = styled.View`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 396px;
    height: 50px;
    border-radius: 20px;
    background-color: #92A8F8;

`
const ButtonText = styled.Text`

    color: white;
    font-weight: 500;
`

export default function ButtonUI() 
{
    return (
        <Button onClick={()=>{}}>
            <ButtonText>default</ButtonText>
        </Button>
    );
}