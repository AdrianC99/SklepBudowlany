import React from 'react';

import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackBase} 
from 'react-native';

const keyboardAvoiding = ({children}) => {
return (
    <KeyboardAvoidingView style={{flex: 1}}>
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
);

}

export default keyboardAvoiding;