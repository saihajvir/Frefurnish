import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Div, Icon, Text } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function ItemIcon ({
    itemText = "default",
    iconFamily = "MaterialIcons",
    iconName = "kitchen",
})
{
    return (
        <Div
            justifyContent="center"
            alignItems="center"
            bg='periwinkle'
            rounded={20}
            h={100}
            w={100}
        >
          
             <Icon
            name={iconName}
            fontFamily={iconFamily}
            color='white'
            fontSize={50}
            />
            <Text
                color="white"
                fontWeight="500"
            >
                {itemText}
            </Text>


        </Div>
    )
}