import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import Landing from '../../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="landing" children={()=><Landing/>}/>
        </Navigator>
    </NavigationContainer>
)

}

export default AppStack;