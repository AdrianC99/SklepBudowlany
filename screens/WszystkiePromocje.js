import * as React from 'react';
import { View, Text } from 'react-native';
import {
    InnerContainer,
    WelcomeContainer,   
} from './../components/styles';
export default function WszystkiePromocje({ navigation }) {
    return (
        <InnerContainer>
            <WelcomeContainer>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>WszystkiePromocje</Text>
        </View>
         </WelcomeContainer>
         </InnerContainer>
    );
}



