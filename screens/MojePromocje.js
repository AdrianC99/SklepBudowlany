import * as React from 'react';
import { View, Text } from 'react-native';
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFromArea,
    StyledButton,
    ButtonText,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
    StyledButtonCamera

    
    
} from './../components/styles';


export default function MojePromocje({ navigation }) {
    return (
        <InnerContainer>
            <WelcomeContainer>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Moje Promocje</Text>
        </View>
        </WelcomeContainer>
        </InnerContainer>
    );
}


