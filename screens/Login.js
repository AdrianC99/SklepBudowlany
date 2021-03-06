import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';




import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFromArea,
    LeftIcon,
    StyledInputLabel, 
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    Line

    
    
} from './../components/styles';
import {View} from 'react-native';

//colors
const{brand, darkLight, primary} = Colors;


const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);


    return(
        
            
            <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/budrol.png')} />
                <PageTitle></PageTitle>
                <SubTitle>Login:</SubTitle>
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) =>
                    {
                    console.log(values);
                    navigation.navigate("Welcome");
                    }
                }
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFromArea>
                 <MyTextInput  
                 label="Email Address"
                 icon= "mail"
                 placeholder="Write your email here.."
                 placeholderTextColor={darkLight}
                 onChangeText={handleChange('email')}
                 onBlur={handleBlur('email')}
                 value={values.email}
                 keyboardType="email-address"
                 />

                <MyTextInput  
                 label="Password"
                 icon= "lock"
                 placeholder="* * * * * * * * * * *"
                 placeholderTextColor={darkLight}
                 onChangeText={handleChange('password')}
                 onBlur={handleBlur('password')}
                 value={values.password}
                 secureTextEntry={hidePassword}
                 isPassword={true}
                 hidePassword={hidePassword}
                 setHidePassword={setHidePassword}
                 />
                 <MsgBox>... </MsgBox>
                 <StyledButton onPress={handleSubmit}>
                     <ButtonText>
                         Login
                     </ButtonText>
                     </StyledButton> 
                     <Line />
                     <ExtraView>
                       <ExtraText>Don't have an account? </ExtraText> 
                       <TextLink onPress={() =>  navigation.navigate("Signup")}>
                           <TextLinkContent>
                               Signup
                           </TextLinkContent>
                           </TextLink> 
                    </ExtraView>
                    </StyledFromArea>
                    )}
               </Formik>
            </InnerContainer>
        </StyledContainer>
    
        
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                  <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>      
                </RightIcon>
            )}
        </View>
        
    )
}

export default Login;
