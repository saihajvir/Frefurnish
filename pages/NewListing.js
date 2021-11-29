import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "react-native";
import { ThemeProvider, Text, Div, Icon, ScrollDiv, Input, Platform, Image } from 'react-native-magnus';
import * as ImagePicker from 'expo-image-picker';

import DonorBottomNav from '../comps/DonorBottomNavBar';
import Header1 from "../comps/header";
import BackButton from "../comps/backbutton";
import UserInput from "../comps/userinput";
import ItemIcon from "../comps/ItemIcon";
import MainButton from "../comps/MainButton";
import HalfButton from "../comps/halfbutton";

const ffTheme = {
  colors: {
    periwinkle: "#92A8F8",
    lavender: "#7367F0",
    salmon: "#EB8D8D",
    white: "#FFFFFF",
    black: "#000000"
  }
}

const Title = styled.Text`
  font-weight: 600;
  padding-top: 20px;
  font-size: 24px;
  margin-bottom:10px;
`;

const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin-bottom:10px;
`;
const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px 0 16px;
    background-color: #FFF;
`

export default function NewListing({route, navigation})
{
  const [listingFuid, setListingFuid] = useState('');
  const [listingName, setListingName] = useState();
  const [listingDescription, setListingDescription] = useState();
  const [listingCondition, setListingCondition] = useState();
  const [listingDate, setListingDate] = useState();
  const [listingLocation, setListingLocation] = useState();
  const [listingPickup, setListingPickup] = useState();
  const [listingImage, setListingImage] = useState();
  const [listingStatus, setListingStatus] = useState();
  const [listingDetails, setListingDetails] = useState();
  const [user, setUser] = useState(null);
 
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // Upload(result.uri);
    }
  };

  const Upload = async(file_uri)=>{
    const file = await fetch(file_uri);
    const blob = await file.blob()

    const storage = getStorage();
    const storageRef = ref(storage, 'test.jpg');

    const snapshot = await uploadBytes(storageRef, blob);
    console.log('uploaded image to firebase!')
  }
  const PostListing = async() => {

    var listingdata = {

        id:"NULL",
        fuid: user.uid,
        listingName: listingName,
        listingDescription: listingDescription,
        listingCondition: listingCondition,
        listingDate: "november",
        listingLocation: listingLocation,
        pickup: listingPickup,
        image: "image",
        status: "pending",
        details: "details"
    
    }
    
  const result = await axios.post('/listings.php', listingdata);
  console.log(result.data)
}

function HandlePublishPress()
{
  PostListing();
  Upload(image);
  /*setTimeout(() => {
    navigation.navigate('donorListing');
  }, 1000)*/

}
useEffect(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (u)=>{
      if(u){
          console.log(u)
          setUser(u);
      }
  })
}, [])



    return (
        <ThemeProvider theme={ffTheme}>
        <ScrollDiv>
        <Wrapper>
      <Div pb={10}>
        <Title>
          Create a Listing
        </Title>
        <Input shadow="sm"
            placeholder="Title"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            onChangeText={(val)=>setListingName(val)}
            />
            <Input shadow="sm"
            placeholder="Location"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            onChangeText={(val)=>setListingLocation(val)}
            />
            <Input shadow="sm"
            placeholder="Condition"
            focusBorderColor="salmon"
            borderColor='salmon'
            mb={10}
            onChangeText={(val)=>setListingCondition(val)}

            />
            <Input shadow="sm"
            placeholder="Tags"
            focusBorderColor="salmon"
            borderColor='salmon'
            />
          <Div flexDir='row' h={50} justifyContent='space-between' mt={10}>
            <HalfButton bg={'white'} color={'salmon'} buttonText='Pick Up' onPress={()=>setListingPickup('Pick up only')}/>
            <HalfButton bg={'white'} color={'salmon'} buttonText='Drop Off' onPress={()=>setListingPickup('Drop off')}/>
          </Div>
      </Div>
      <Div pb={10}>
        <SubTitle 
        > 
          Add a Description
        </SubTitle>
          <Input h={100} borderColor='salmon' multiline={true} textAlignVertical='top' onChangeText={(val)=>setListingDescription(val)} />
      </Div>
      <Div>
        <SubTitle>
          Add Images
        </SubTitle>
      </Div>
      <Button title='Add From Library' onPress={pickImage} />
      <Div 
      flexDir="row"
      justifyContent='space-between'
      flex={1}
      pt={10}
      pb={10}
      >
        <Div 
        borderColor='salmon'
        borderWidth={1}
        rounded={10}
        w='100%'
        h={200}>
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />}

        </Div>
        {/* <Input 
        w={100}
        h={137}/>
        <Input 
        w={100}
        h={137}/> */}
      </Div>
        <MainButton mt={10} mb={10} buttonText="Publish" bg='salmon' onPress={HandlePublishPress}/>
      <Div>
      </Div>
      </Wrapper>
      </ScrollDiv>
      <DonorBottomNav 
        GoHome={() => {navigation.navigate('donorHome')}}
        GoListings={() => {navigation.navigate('NewListing')}}
        GoRequests={() => {navigation.navigate('Donorrequest')}}
        GoProfile={() => {navigation.navigate('DonorProfile')}}
      />
        </ThemeProvider>
    )

}