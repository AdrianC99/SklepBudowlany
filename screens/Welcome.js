import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik, formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';




import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFromArea,
    StyledButton,
    ButtonText,
    WelcomeContainer,
    WelcomeImage,
    Avatar

    
    
} from './../components/styles';




const Welcome = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);


    return(
        
        <>
            <StatusBar style="dark"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/budowa.jpg')}/>
                <WelcomeContainer>
                <PageTitle welcome={true}>Witaj!</PageTitle>
                <SubTitle welcome={true}>Adrian Dudek</SubTitle>
                <SubTitle welcome={true}>adudek121@gmail.com</SubTitle>
                <StyledFromArea>
                <Avatar resizeMode="cover" source={require('./../assets/img/budrol.png')} />
                 <StyledButton onPress={() => {navigation.navigate('Login')}}>
                     <ButtonText>
                         Logout
                     </ButtonText>
                     </StyledButton> 
                     <StyledButtonCamera onPress={() => {navigation.navigate('Kamera')}}>
                     <ButtonText>
                         Camera
                     </ButtonText>
                     </StyledButtonCamera> 
                    </StyledFromArea>                  
               </WelcomeContainer>
            </InnerContainer>
        </>
        
    );
};



export default Welcome;
