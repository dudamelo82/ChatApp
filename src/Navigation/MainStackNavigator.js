import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import GroupScreen from '../screens/GroupScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import ChatScreen from '../screens/ChatScreen'



const Stack = createStackNavigator()

function ChatFlow(){
  return (
    <NavigationContainer>
      <Stack.Navigator name = "chat"> 
        <Stack.Screen 
        name = "SignInScreen"
        component = {SignInScreen}
        options = {{headerShown: false}}
        />

         <Stack.Screen 
        name = "GroupScreen"
        component = {GroupScreen}
        options = {{title :'Goups'}}
        />

        <Stack.Screen 
        name = "AddGroupScreen"
        component = {AddGroupScreen}
        options = {{title :'Goups'}}

        />

        <Stack.Screen 
        name = "ChatScreen"
        component = {ChatScreen}
        options = {{title :'Chat'}}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MainStackNavigator(){

  return(
    ChatFlow()
  )
}

export default MainStackNavigator
