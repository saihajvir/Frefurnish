import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-magnus'
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function EditButton({
    bg="#F0A9A9",
    color="white",
    buttonText="Edit"
}) 
{
    return (
        <Button
            bg={bg}
            
            rounded={10}
          
            h={30}
            w={70}
            ml='81%'
            px='xl'
            
           
        
          
        >
            Edit
        </Button>
    );
}