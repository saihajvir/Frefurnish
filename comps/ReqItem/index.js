import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image, Button, Icon } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function ReqItem({
    borderColor = "#6CAF61",
    itemOpacity,
    itemTitle = "Toaster",
    itemStatus = "Approved",
    imgSrc = imgSrc,
    bgColor = "#00000000",
    onpress


  
})

{
    return(
        <Div mr={25}>
            <Button 
                bg={bgColor}
                onPress={onpress}
                block color="white" 
                p="none"
                h={140}
                w={140}
             
                borderColor={borderColor}
                borderWidth={3}
                rounded={10}
                justifyContent="center"
                alignItems="center"
            >
                    <Div
                        h="100%"
                        w="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgImg={imgSrc}
                    >
                        <Div
                            h="100%"
                            w="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="black"
                            opacity={itemOpacity}
                        >
                            <Text
                                color="white" 
                                fontSize="3xl" 
                                fontWeight="500"
                            >
                                   {itemStatus}
                            </Text>
                        </Div>
                     </Div>
            </Button>
            <Text
                color="black" 
                fontSize={13} 
                fontWeight="500"
                mt={5}
            >
                    {itemTitle}
            </Text>
        </Div>
        
    );
}
