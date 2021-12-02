import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { ScrollView, View, ImageBackground, StyleSheet} from "react-native";

import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image } from 'react-native-magnus';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker';

import MainButton from '../comps/MainButton/index';
import BottomNav from '../comps/BottomNavBar';
import ItemIcon from "../comps/ItemIcon";
import UserCard from "../comps/UserCard";

import ChairIcon from '../assets/Frefurnish-plain.png';
import Logo from '../assets/Frefurnish-logo.png';
import UserInput from "../comps/userinput";
import UploadImage from "../comps/UploadImage";
import Background from '../assets/background.png';

import ReqItem from "../comps/ReqItem";
import { StatusBar } from "expo-status-bar";
import Gradient from '../assets/frefurnish-gradient.png';
import DonorGradient from '../assets/gradient-donor.png';
import SignIn from "../comps/SignIn";


const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000",
      salmon: "#EAAB97",
      whiteLowO: "rgba(255,255,255, 0.25)"
    }
  }

const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    justify-content: center;
    align-items: center;
`
const WrapperImage = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
`
const TopContainer = styled.View`
    flex: ${props=>props.mflex};
    width: 100%;
    justify-content: flex-end;
    align-items: ${props=>props.alignItems};
`

const Container = styled.View`
    flex: ${props=>props.mflex};
    width: 100%;
    align-items: center;
    justify-content: center;
`

const BottomContainer = styled.View`
    flex: ${props=>props.mflex};
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10%;
`

const Heading = styled.Text`
    font-size: 36px;
    font-weight: 700;
    color: ${props=>props.textcol};
`
const ImgCont = styled.View`
    flex: ${props=>props.mflex};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30%;
`


export default function Landing({
    navigation,
    bg='#92A8F8',
    textcol='#FFF',
    mflex='1',
    alignItems='flex-start'
})
{
    const [state, nextState] = useState(0);
    
    const [user, setUser] = useState('');

    //database states
    const [fuid, setFuid] = useState('');
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [image, setImage] = useState(null);
    
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    // ---------------------------------------------------------

    function HandleTypePress()
    {
        if(user === 'worker')
        {
            {nextState (state + 1)}
        }
        else if(user === 'donor')
        {
            {nextState (state + 1)}
        } else{
            nextState(state)
        }
    }
    
    //post user data to mysql database
    
    const PostUserData = async(email, password, fuid) => {

        var userdata = {

            id:"NULL",
            fuid: fuid,
            name: name,
            phone: phone,
            email: email,
            password: password,
            worker: user
        
        }
        
      const result = await axios.post('/users.php', userdata);
    //   console.log(result)
       
    }

    const GetData = async() => {
        const result = await axios.get('/users.php');
        console.log(result.data)
      }
    
    //FIREBASE CREATE ACCOUNT AND SIGN IN
    const FBCreateUser = async(email, password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setFuid(user.uid)
            PostUserData(email,password, user.uid);
            Upload(user.uid)
        })
        console.log(fuid)
        alert('Created!')
        setTimeout(() => {

            {nextState (state + 1)}
        }, 1000)
        // PostUserData(email, password, fuid);
    }
    const FBSignIn = async(email, password)=>{
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password)
        alert('Signed In!')

        setTimeout(() => {
            {nextState (state + 1)}
            GoHome();
        }, 1000)
      }

    function GoHome()
    {
        
        setTimeout(() => {
            nextState(0)
            user === 'worker' ? navigation.navigate("Whomepage") : navigation.navigate("donorHome")
        }, 1500)
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          // Upload(result.uri);
        }
      };
    
      const Upload = async(fuid)=>{
        const file = await fetch(image);
        const blob = await file.blob()
    
        const storage = getStorage();
        const storageRef = ref(storage, `profileimg/item${fuid}.jpg`);
    
        const snapshot = await uploadBytes(storageRef, blob);
        console.log('uploaded image to firebase!')
      }

    if(state === 0)
    {
    return (
        <ThemeProvider theme={ffTheme}>
            <ImageBackground source={Background} style={styles.container}>
            <Wrapper bg='#92A8F8' >
            <TopContainer mflex='1' alignItems='center'>
                <Heading textcol='#FFF'>
                    Welcome to Frefurnish
                </Heading>
            </TopContainer>
            <Container mflex='2'>
                <Image source={Logo} w={223} h={234}/>
            </Container>
            <BottomContainer mflex='0.5'>
                <MainButton iconName='' buttonText={'Get Started'} bg="whiteLowO" textColor='white' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
            </ImageBackground>
        </ThemeProvider>
    )}

    if(state === 1)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <ImageBackground source={Background} style={styles.container}>
            <Wrapper bg="#FFF">
            <TopContainer mflex='1' alignItems='flex-start'>
                <Heading textcol='white'>
                    What's your purpose?
                </Heading>
            </TopContainer>
            <Container mflex='3'>
                <UserCard 
                    GradImg={Gradient}
                    descriptionText='Social workers are individuals who are looking to find listings that will help improve or sustain the quality of life at the social home they work at. Social workers are the only type of user eligible to receive donations.'
                    userType='Social Worker'
                    setUser={setUser}
                />
                <UserCard
                    GradImg={DonorGradient}
                    descriptionText='Donors are individuals and vendors that are looking to donate their personal items or lightly used returned items and excess inventory.'
                    userType='Donor'
                    setUser={setUser}
                />
            </Container>
            <BottomContainer mflex='1'>
                <MainButton iconName='' buttonText={'Next'} bg="whiteLowO" textColor='white' onPress={HandleTypePress}/>
            </BottomContainer>
            </Wrapper>
            </ImageBackground>
        </ThemeProvider>
        )
    }
    if(state === 2)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <ImageBackground source={Background} style={styles.container}>
            <Wrapper bg="#FFF">
            <TopContainer mflex='0.7' alignItems='flex-start'>
                <Heading textcol='white'>
                    Create your account
                </Heading>
            </TopContainer>
            <Container mflex='2'>
                <Text/>
                <UploadImage uploadText='Profile Image' onPress={pickImage} bgImg={image ? {uri: image} : null}/>
                <Text/>
                <UserInput onChangeName={val=>setName(val)} onChangePhone={val=>setPhone(val)} onCreate={FBCreateUser}/>
            </Container>
            <BottomContainer mflex='1'> 
                {/* <MainButton buttonText='Axios Post' onPress={PostUserData} /> */}
                <MainButton iconName='' buttonText={'Next'} bg="whiteLowO" textColor='white' onPress={() => {nextState (state + 1)}}/>
            </BottomContainer>
            </Wrapper>
            </ImageBackground>
        </ThemeProvider>
        )
    }
    if(state === 3)
    {
        return (
            <ThemeProvider theme={ffTheme}>
                <ImageBackground source={Background} style={styles.container}>
                <Wrapper bg='#92A8F8'>
                    <Container mflex='2'>
                        <ImgCont>
                        <Image source={Logo} w={223} h={234}/>
                        </ImgCont>
                    <TopContainer mflex='0.5' alignItems='flex-start'>
      

                        <Heading textcol='#FFF'>
                            Sign In
                        </Heading>
                        <Text/>
                    </TopContainer>
                    
                        <SignIn onSignIn={FBSignIn}/>
                    </Container>
                    <BottomContainer mflex='0.5'>
                        {/* <MainButton buttonText={'Next'} bg="white" textColor='#EAAB97' onPress={() => {nextState (state + 1)}}/> */}
                    </BottomContainer>
                </Wrapper>
                </ImageBackground>
            </ThemeProvider>
        )
    }

    if(state === 4)
    {
        return(
            <ThemeProvider theme={ffTheme}>
            <ImageBackground source={Background} style={styles.container}>
            <Wrapper bg='#92A8F8'>
            <TopContainer mflex='1' alignItems='center'>
                <Heading textcol='#FFF'>
                    All done. Let's Begin!
                </Heading>
            </TopContainer>
            <Container mflex='2'>
                <Image source={Logo} w={223} h={234}/>
            </Container>
            <BottomContainer mflex='0.5'>
                {/* <MainButton buttonText={'Enter'} bg="white" textColor='#EAAB97' onPress={() => {user === 'worker' ? navigation.navigate("Whomepage") : navigation.navigate("donorHome")}}/> */}
            </BottomContainer>
            </Wrapper>
            </ImageBackground>
        </ThemeProvider> 
        )           
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
    }
})