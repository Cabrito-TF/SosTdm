import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import Landing from '../../pages/Landing';
import SignUp from '../../pages/SignUp';
import FakeLanding from '../../pages/FakeLanding';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Landing." children={()=><FakeLanding/>}/>
            <Screen name="Landing" children={()=><Landing/>}/>
            <Screen name="SignUp" children={()=><SignUp/>}/>
        </Navigator>
    </NavigationContainer>
)

}

export default AppStack;