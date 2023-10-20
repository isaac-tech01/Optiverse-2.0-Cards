import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardsScreen from '../screens/CardsScreen'
import RequestCardScreen from '../screens/RequestCardScreen'
import ActivateCardScreen from '../screens/ActivateCardScreen'
import SupportCardScreen from '../screens/SupportCardScreen'
import OptionCardScreen from '../screens/OptionCardScreen'
import ChangePinScreen from '../screens/ChangePinScreen'


const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Card' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Card' component={CardsScreen}/>
            <Stack.Screen name='Request' component={RequestCardScreen}/>
            <Stack.Screen name='Activate' component={ActivateCardScreen}/>
            <Stack.Screen name='Change' component={ChangePinScreen}/>
            <Stack.Screen name='Support' component={SupportCardScreen}/>
            <Stack.Screen name='Option' component={OptionCardScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation