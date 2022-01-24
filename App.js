import React from 'react';


//react navi
import RootStack from './navigators/RootStack';
import MainContainer from './navigators/MainContainer';

export default function App(){
  return (<RootStack>
    <MainContainer />
  </RootStack>
  );
}


 
