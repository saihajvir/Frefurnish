import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Div, Text, Image, Button, Icon } from "react-native-magnus";
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

export default function ReqItem({
    borderColor = "#6CAF61",

    itemTitle = "Toaster",
    itemStatus = "Approved",
    imgSrc= "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    onpress


  
})

{
    return(
        <Div>
            <Button 
                block color="white" 
                p="none"
                h={150}
                w={150}
             
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
                        bgImg={{
                            uri: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",}}
                    >
                        <Div
                            h="100%"
                            w="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="black"
                            opacity={0.7}
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
                fontSize="xl" 
                fontWeight="500"
            >
                    {itemTitle}
            </Text>
        </Div>
        
    );
}
