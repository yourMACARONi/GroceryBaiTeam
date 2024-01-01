import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../Constants/colors'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function History() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:COLORS.green1, flex:1,}}> 
      <View  Style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>History</Text>
    </View>
  
      </SafeAreaView>
    </SafeAreaProvider>

  )
    
}