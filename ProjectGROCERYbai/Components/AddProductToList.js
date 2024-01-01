import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import ProductSample from './ProductSample'

import COLORS from '../Constants/colors'

import { Ionicons } from "@expo/vector-icons";
import IncreaseAndDecrease from './IncreaseAndDecrease';
import AddtoListButton from '../Buttons/AddtoListButton'



export default function AddProductToList() {
  return (
    <SafeAreaProvider style={{backgroundColor:COLORS.white}}>
        <SafeAreaView>
            <ScrollView>
                <View style={{marginTop:20,}}>
                <TouchableOpacity onPress={() => Alert.alert("Closed")}
                                  style={{padding:20}}
            >
                     <Ionicons name="close-circle-outline" size={40} color={COLORS.black} />
                </TouchableOpacity>

          <ProductSample></ProductSample>
          <IncreaseAndDecrease></IncreaseAndDecrease>
          <AddtoListButton mode='elevated'
           onPress={()=>(Alert.alert("Pressed"))}
           title='Add Product'
           style={{
            marginVertical: 1,
            marginHorizontal: 45,
            width: 300,
            borderRadius: 10,
          }}
           
           ></AddtoListButton>
 
                </View>
                <View style={{padding:10, marginHorizontal:30, borderBottomWidth:1}}>
                <Text style={{fontWeight: 'bold'}}>More Like This:</Text>
                </View>
                <View>
                    {/* Product db here */}
                </View>

            </ScrollView>
            
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})