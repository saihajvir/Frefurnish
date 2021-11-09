import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon, Div } from 'react-native-magnus'

export default function BottomNav({
    GoHome,
    GoListings,
    GoRequests,
    GoProfile  
})
{
    return (
    
        <Div
            style={styles.NavBar}
            h={75}
        >
            <Button
                h={70}
                w={90}
                bg='white'
                flexDir='column'
                underlayColor='lightgrey'
                onPress={GoHome}
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={28}
                    color='grey'
                    mb={5}
                />
                    <Text>Home</Text>
            </Button>
      
            <Button
                h={70}
                w={90}
                bg='white'
                flexDir='column'
                onPress={GoListings}            
            >
                <Icon
                    name='shopping-bag'
                    fontFamily='FontAwesome5'
                    fontSize={28}
                    color='grey'
                    mb={5}
                />
                    <Text>Listings</Text>
            </Button>

            <Button
                h={70}
                w={90}
                bg='white'
                flexDir='column'     
                onPress={GoRequests}        
            >
                <Icon
                    name='md-chatbubbles'
                    fontFamily='Ionicons'
                    fontSize={28}
                    color='grey'
                    mb={5}
                />
                    <Text>Requests</Text>
            </Button>

            <Button
                h={70}
                w={90}
                bg='white'
                flexDir='column'     
                onPress={GoProfile}        
            >
                <Icon
                    name='user-circle'
                    fontFamily='FontAwesome5'
                    fontSize={28}
                    color='grey'
                    mb={5}
                />
                    <Text>Profile</Text>
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
        backgroundColor: 'white'
    }
})
