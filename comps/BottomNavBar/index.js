import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Div } from 'react-native-magnus'

export default function BottomNav({
    
})
{
    return (
    
        <Div
            style={styles.NavBar}
            h={75}
        >
            <Button
                h={70}
                w={70}
                flexDir='column'             
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={36}
                    color='grey'
                />
                    <Text>Home</Text>
            </Button>
      
            <Button
                h={70}
                w={70}
                flexDir='column'             
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={36}
                    color='grey'
                />
                    <Text>Home</Text>
            </Button>

            <Button
                h={70}
                w={70}
                flexDir='column'             
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={36}
                    color='grey'
                />
                    <Text>Home</Text>
            </Button>

            <Button
                h={70}
                w={70}
                flexDir='column'             
            >
                <Icon
                    name='ios-home'
                    fontFamily='Ionicons'
                    fontSize={36}
                    color='grey'
                />
                    <Text>Home</Text>
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
    }
})
