import {View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, TextInput} from 'react-native'
import {Button, Text, Searchbar, Chip} from 'react-native-paper'

import Container from './Container/Container'
import { useState, useEffect } from 'react'

const category_list = ["Fresh Meat & Seafoods", "Fresh Produce", "Frozen Goods", "Ready To Heat & Eat Items", "Ready to Cook", "Chilled & Dairy Items", "International Goods","Bakery", "Pantry", "Snacks", "Beverage", "Health & Beauty", "Babies & Kids", "Home Care", "DIY/Hardware", "Pet Care", "Health & Hygiene Essentials"]


export default function Home1( { navigation } ) {
     const [search, setSearch] = useState()

     const [product, setProduct] = useState([])

     function item(item) {
          Alert.alert("You selected an item", item)
          selectCategory(item)
     }

     useEffect(() => {
          // write your code here, it's like componentWillMount
          loadItem();

      }, [])

     async function loadItem() {
          const response = await fetch('http://localhost:3000/api/category')

          const data = await response.json()

          setProduct([...data])
     }
     
     async function selectCategory(name) {
          
          const response =  await fetch(`http://localhost:3000/api/category?category=${encodeURIComponent(name)}`)

          const data = await response.json()
          
          setProduct([...data])
     }

     async function searchItem(name) {
          
          const response =  await fetch(`http://localhost:3000/api/search?item=${encodeURIComponent(name)}`)

          const data = await response.json()
          
          setProduct([...data])
     }

     return (
          <KeyboardAvoidingView  style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flex: 1, margin: 100}}>
               <View style={{marginBottom: 10}}>
                    <View>
                         <TextInput placeholder='Search Item' onChangeText={(value) => {setSearch(value)}} value={search} style={{width: 400}} />
                         <Button onPress={() => (searchItem(search))}>search</Button>
                    </View>
               </View>

               <View style={{flexDirection: "row", height: 40}}>
                    <ScrollView horizontal={true}>
                         {
                              category_list.map((items, index) => {
                                   return <TouchableOpacity style={{margin: 10}} key={index} value={items} onPress={(() => (item(items)))}>
                                             <Text>{items}</Text>
                                          </TouchableOpacity>
                              })
                         }
                    </ScrollView>
               </View>
               
               <View style={{flex: 1, justifyContent:'flex-start'}}>
                    <ScrollView>
                         <View style={style.itemContainer}>

                         {
                              product.map((items, index) => {
                                   return <Container name={items.product.title} price={items.product.price} image={items.product.image_url} key={index} onPress={() => (Alert.alert('Item Information', `${items.product.title} ${items.product.price}` ))} />
                              })
                         }

                         </View>
                    </ScrollView>
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
     itemContainer: {
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent:'space-evenly'
     }

})