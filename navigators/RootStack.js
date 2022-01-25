import * as React from 'react';


import {Colors} from './../components/styles'
const {primary, tetriary} = Colors;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Kamera from './../screens/Kamera';
import Home from './../screens/Home';

const Stack = createNativeStackNavigator();

const RootStack = () => {
   return(
       <NavigationContainer>
           <Stack.Navigator screenOptions={ {
               headerStyle:{
                backgroundColor: 'transparent'
               },
               headerTintColor: tetriary,
               headerTransparent: true, 
               headerTitle: '',
               headerLeftContainerStyle:{
                   paddingLeft: 20
               }
            
            }}
            initialRouteName="Login"
            >

               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Signup" component={Signup} />
               <Stack.Screen name="Welcome" component={Welcome} />
               <Stack.Screen name="Kamera" component={Kamera} />
               <Stack.Screen name="Home" component={Home} />
           </Stack.Navigator>
       </NavigationContainer>
   );
}

export default RootStack;
