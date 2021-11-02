import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Header } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function Header1({
   headerText = "Home"
}) 
{
    return (
        <Header
        p="lg"
        bg="#92A8F8"
        borderBottomWidth={1}
        borderBottomColor="gray100"
        alignment="center"
        color="white"
        prefix={
            <Button bg="transparent">
            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
            </Button>
        }
        >
        {headerText}
        </Header>
    );
}