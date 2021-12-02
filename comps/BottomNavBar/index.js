import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Icon, Div, Text } from 'react-native-magnus'

export default function BottomNav({
    GoHome,
    GoListings,
    GoRequests,
    GoProfile,
    gradientImg,
    iconColor = 'white',
    homeColor = 'white',
    listingColor = 'white',
    requestColor = 'white',
    profileColor = 'white',
    homeText = 'white',
    listingText = 'white',
    requestText = 'white',
    profileText = 'white',
})
{
    return (
        
        <Div
            bgImg={gradientImg}
            style={styles.NavBar}
            h={80}
            rounded={20}
        >
            <Button
                h={70}
                w={90}
                bg='#00000000'
                flexDir='column'
                underlayColor='#0000000'
                onPress={GoHome}
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={24}
                    color={homeColor}
                    mb={5}
                />
                    <Text color={homeText} fontWeight='600' fontSize={10}>Home</Text>
            </Button>
      
            <Button
                h={70}
                w={90}
                bg='#00000000'
                flexDir='column'
                onPress={GoListings}            
            >
                <Icon
                    name='shopping-bag'
                    fontFamily='FontAwesome5'
                    fontSize={24}
                    color={listingColor}
                    mb={5}
                />
                    <Text color={listingText} fontWeight='600' fontSize={10}>Listings</Text>
            </Button>

            <Button
                h={70}
                w={90}
                bg='#00000000'
                flexDir='column'     
                onPress={GoRequests}        
            >
                <Icon
                    name='md-chatbubbles'
                    fontFamily='Ionicons'
                    fontSize={24}
                    color={requestColor}
                    mb={5}
                />
                    <Text color={requestText} fontWeight='600' fontSize={10}>Requests</Text>
            </Button>

            <Button
                h={70}
                w={90}
                bg='#00000000'
                flexDir='column'     
                onPress={GoProfile}        
            >
                <Icon
                    name='user-circle'
                    fontFamily='FontAwesome5'
                    fontSize={24}
                    color={profileColor}
                    mb={5}
                />
                    <Text color={profileText} fontWeight='600' fontSize={10}>Profile</Text>
            </Button>

        </Div>

    )
}

const styles = StyleSheet.create({
    NavBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    
})
