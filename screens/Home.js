import * as React from 'react';
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MojePromocje from './MojePromocje';
import WszystkiePromocje from './WszystkiePromocje';
import Kamera from './Kamera';
import Informacje from './Informacje';
import Wydarzenia from './Wydarzenia';
import Ionicons from 'react-native-vector-icons/Ionicons';

const mojePromocjeName = "MojePromocje";
const wszystkiePromocjeName = "WszystkiePromocje";
const kameraName = "Kamera";
const informacjeName = "Informacje";
const wydarzeniaName = "Wydarzenia";


const Tab = createBottomTabNavigator();
 function Home({ navigation }) {
    return (

     
        <Tab.Navigator
        initialRouteName={mojePromocjeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === mojePromocjeName) {
              iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';

            } else if (rn === wszystkiePromocjeName) {
              iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';

            } else if (rn === kameraName) {
              iconName = focused ? 'camera' : 'camera-outline';
            }else if (rn === informacjeName) {
                iconName = focused ? 'information' : 'information-outline';
            }else if (rn === wydarzeniaName) {
                iconName = focused ? 'alert-circle' : 'alert-circle-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}
        >
          <Tab.Screen name="MojePromocje" component={MojePromocje}/>
          <Tab.Screen name="WszystkiePromocje" component={WszystkiePromocje} />
          <Tab.Screen name="Kamera" component={Kamera} />
          <Tab.Screen name="Informacje" component={Informacje} />
          <Tab.Screen name="Wydarzenia" component={Wydarzenia} />

          
        </Tab.Navigator>
        
    );
}

export default Home;
