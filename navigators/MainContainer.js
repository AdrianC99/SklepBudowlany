import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MojePromocje from './../screens/MojePromocje';
import WszystkiePromocje from './../screens/WszystkiePromocje';
import Home from './../screens/Home';





const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
<NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="MojePromocje"
          component={MojePromocje}
          options={{
            tabBarLabel: 'MojePromocje',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="WszystkiePromocje"
          component={WszystkiePromocje}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default MainContainer;