import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View, } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useFocusEffect } from "@react-navigation/core";
import app from "../utils/initfb";
import * as ImagePicker from 'expo-image-picker';
import { ThemeProvider, Text, Div, Button, Icon, ScrollDiv, Image, Avatar, Modal } from 'react-native-magnus';

import ItemIcon from "../comps/ItemIcon";
import BottomNav from "../comps/BottomNavBar";
import BackButton from "../comps/backbutton";
import ProfileHeader from "../comps/ProfileHeader";
import HalfButton from "../comps/halfbutton";

import ProfileImage from '../assets/julian.png'

const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px 0 16px;
  background-color: #FFF;
`
const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
`
const BottomContainer = styled.View`
  flex: 2;
`
const ButtonContainer = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: space-between;
`
const ImageContainer = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: center;
`
const InputContainer = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`
const TextInp = styled.TextInput`
  height: ${props=>props.height};
  width: 100%;
  background-color: white;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: solid 1px #92A8F8;
`
const ffTheme = {
    colors: {
      periwinkle: "#92A8F8",
      lavender: "#7367F0",
      white: "#FFFFFF",
      black: "#000000"
    }
} 

export default function EditWorkerProfile({
    route,
    navigation,
    height='40px'
}) {

    const [prof, setProf] = useState(null);
    const [user, setUser] = useState(null);
    const [name, setName] = useState();
    const [workplace, setWorkplace] = useState();
    const [description, setDescription] = useState();
    const [credentials, setCredentials] = useState();
    const [image, setImage] = useState();
    useFocusEffect(
      React.useCallback(() => {

      const GetData = async(fuid) => {
        const result = await axios.get('/users.php?fuid='+fuid);
        console.log(result.data)

      const storage = getStorage(app);
        for(var i =0; i<result.data.length; i++){
          try{
               console.log("try");
                const url = await getDownloadURL(ref(storage, `profileimg/item${result.data[i].fuid}.jpg`));
                  result.data[i].url = url;
                    console.log(url)
          } catch (e){
              result.data[i].url = null;
              continue;
          }
        }
        setProf(result.data[0])
      }
      
      const auth = getAuth()
      
      if(auth?.currentUser.uid){
        GetData(auth.currentUser.uid);
      }
    }, []));
    
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


    const PatchProfile = async() => {
      var profiledata = {

        fuid: user.uid,
        name,
        workplace,
        description,
        credentials
      }

      const result = await axios.patch('./users.php', profiledata)
    }
    async function HandleConfirmPress()
    {
        await PatchProfile();
        setTimeout(() => {
          navigation.push("WorkerProfile")
        }, 1000)     
    }
    if(prof === null)
    {
      return<>
      </>
    }
    return (
    <ThemeProvider theme={ffTheme}>
      <Wrapper>
        <TopContainer>

          <ImageContainer>
            <TouchableOpacity onPress={pickImage}>
            <Image
                h={150}
                w={150}
                rounded="circle"
                source={image ? {uri: image} : prof.url ? {uri:prof.url} : ProfileImage}
            />
            </TouchableOpacity>
          </ImageContainer>

          <InputContainer>
            <TextInp placeholder='Name' height={height} onChangeText={(val)=>setName(val)}/>
            <TextInp placeholder='Phone Number' height={height}/>
            <TextInp placeholder='Workplace' height={height} onChangeText={(val)=>setWorkplace(val)}/>
          </InputContainer>

        </TopContainer>

        <BottomContainer>
          <TextInp placeholder='Description' height='100px' multiline={true} onChangeText={(val)=>setDescription(val)}/>
          <TextInp placeholder='Credentials' height='200px' multiline={true} onChangeText={(val)=>setCredentials(val)}/>
        </BottomContainer>

        <ButtonContainer>
          <HalfButton buttonText='Confirm' bg="#6CAF61" borderColor="#6CAF61" onPress={HandleConfirmPress}/>
          <HalfButton  buttonText='Cancel' bg="#E25C5C" borderColor="#E25C5C" onPress={() => {navigation.navigate("WorkerProfile")}}/>
        </ButtonContainer>

      </Wrapper>
      <BottomNav 
        GoHome={() => {navigation.navigate("Whomepage")}}
        GoListings={() => {navigation.navigate("Market")}}
        GoRequests={() => {navigation.navigate("Requests")}}
        GoProfile={() => {navigation.navigate("WorkerProfile")}}
        />
    </ThemeProvider>
    )
}