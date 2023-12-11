import { View, KeyboardAvoidingView, StyleSheet, ActivityIndicator} from "react-native";

import { TextInput, Text } from "react-native-paper";

import * as SecureStore from 'expo-secure-store'

import URL from '../api/constants'
import { useEffect } from "react";
import { useQuery, QueryClient } from "react-query";

async function userMe() {
     const response = await fetch(`${URL}/api/user/me`, {
          headers: {
               'Authorization': `Bearer ${ await SecureStore.getItemAsync('token')}`
          }
     })

     const message = await response.json()

     return message
}

export default function Profile1() {

     const { isLoading, error, data } = useQuery(["profile"], userMe,
     {
          staleTime: 3000
     })


     return (
     <KeyboardAvoidingView style={style.container}>
          <View>
               <View style={{flex: 1, margin: 100, alignItems: 'center'}}>
                    <View style={{marginBottom: 100}}>
                         <Text variant="titleLarge">Personal details</Text>
                    </View>

                    <View>
                         {
                              data.map((data, index) => {
                                   return (
                                   <View>
                                        <Text key={index}>{data.name}</Text>
                                        <Text key={index}>{data.email}</Text>
                                   </View>
                                   )

                              })
                         }
                    </View>
               </View>
          </View>
     </KeyboardAvoidingView>
     )
}



const style = StyleSheet.create({
     container: {
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
     ImageContainer: {
     },
     boldText: {
          fontWeight: 'bold'
     },
     Input: {
          backgroundColor: 'white',
          width: 300,
          borderRadius: 100,
          margin: 10
     },
     inputContainer: {
          textAlign: 'center',
          alignItems: 'center',
          flex: 2,
          margin: 1
     }
})