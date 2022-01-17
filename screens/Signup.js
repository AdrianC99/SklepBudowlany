import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';




import {
    StyledContainer,
    InnerContainer,
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
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    Line

    
    
} from './../components/styles';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

//Kolory
const{brand, darkLight, primary} = Colors;



//Kalendarz do daty urodzenia
import DateTimePicker from '@react-native-community/datetimepicker';


//Wyłączanie klawiatury w dowolnym miejscu
import KeyboardAvoiding from './../components/KeyboardAvoiding';

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

   const [dob, setDob] = useState();

   const onChange = (event, selectedDate) => {
       const currentDate = selectedDate || date;
       setShow(false);
       setDate(currentDate);
       setDob(currentDate);
   }

    const showDatePicker = () => {
        setShow(true);
    }

    return(
        <KeyboardAvoiding>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle></PageTitle>
                <SubTitle>Register:</SubTitle>

                {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

                <Formik
                initialValues={{name: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                onSubmit={(values) =>
                    {
                    console.log(values);
                    navigation.navigate("Welcome");
                    }
                }
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFromArea>
                   
                 <MyTextInput  
                 label="Name"
                 icon= "person"
                 placeholder="Your full name."
                 placeholderTextColor={darkLight}
                 onChangeText={handleChange('name')}
                 onBlur={handleBlur('name')}
                 />

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
                 label="Date of birth"
                 icon= "calendar"
                 placeholder="YYYY-MM-DD"
                 placeholderTextColor={darkLight}
                 onChangeText={handleChange('dateOfBirth')}
                 onBlur={handleBlur('email')}
                 value={dob ? dob.toDateString() : ''}
                 isDate={true}
                 editable={false}
                 showDatePicker={showDatePicker}
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

<MyTextInput  
                 label="Confirm Password"
                 icon= "lock"
                 placeholder="* * * * * * * * * * *"
                 placeholderTextColor={darkLight}
                 onChangeText={handleChange('confirmPassword')}
                 onBlur={handleBlur('confirmPassword')}
                 value={values.confirmPassword}
                 secureTextEntry={hidePassword}
                 isPassword={true}
                 hidePassword={hidePassword}
                 setHidePassword={setHidePassword}
                 />
               
                 <StyledButton onPress={handleSubmit}>
                     <ButtonText>
                         Register
                     </ButtonText>
                     </StyledButton> 
                     <Line />
                     <ExtraView>
                       <ExtraText>Allready have a account? </ExtraText> 
                       <TextLink onPress={() => navigation.navigate('Login')}>
                           <TextLinkContent>
                               Login
                           </TextLinkContent>
                           </TextLink> 
                    </ExtraView>
                    </StyledFromArea>
                    )}
               </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoiding>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props}/>}
            {isDate && <TouchableOpacity onPress= {showDatePicker}>
            <StyledTextInput {...props}/>
            </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                  <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>      
                </RightIcon>
            )}
        </View>
        
    )
}

export default Signup;
