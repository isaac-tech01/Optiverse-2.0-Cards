import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardsScreen from '../screens/cards/CardsScreen'
import RequestCardScreen from '../screens/cards/RequestCardScreen'
import ActivateCardScreen from '../screens/cards/ActivateCardScreen'
import SupportCardScreen from '../screens/cards/SupportCardScreen'
import OptionCardScreen from '../screens/cards/OptionCardScreen'
import ChangePinScreen from '../screens/cards/ChangePinScreen'

import BeneficiariesScreen from '../screens/transfer/beneficiary/BeneficiariesScreen'
import AddBeneficiaryScreen from '../screens/transfer/beneficiary/AddBeneficiaryScreen'
import BeneficiaryScreen from '../screens/transfer/beneficiary/BeneficiaryScreen'
import AddBeneficiary2Screen from '../screens/transfer/beneficiary/AddBeneficiary2Screen'


const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Beneficiaries' screenOptions={{headerShown: false ,animation:"slide_from_right"}}>
            <Stack.Screen name='Card' component={CardsScreen}/>
            <Stack.Screen name='Request' component={RequestCardScreen}/>
            <Stack.Screen name='Activate' component={ActivateCardScreen}/>
            <Stack.Screen name='Change' component={ChangePinScreen}/>
            <Stack.Screen name='Support' component={SupportCardScreen}/>
            <Stack.Screen name='Option' component={OptionCardScreen}/>

            <Stack.Screen name='Beneficiaries' component={BeneficiariesScreen}/>
            <Stack.Screen name='Add_Beneficiary' component={AddBeneficiaryScreen}/>
            <Stack.Screen name='Beneficiary' component={BeneficiaryScreen}/>
            <Stack.Screen name='Add_Beneficiary_E'  component={AddBeneficiary2Screen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation