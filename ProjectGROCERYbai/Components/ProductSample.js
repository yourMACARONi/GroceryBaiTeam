import { Text, Button, TextInput} from 'react-native-paper'

import { View, Image, StyleSheet } from 'react-native'


export default function ProductSample() {
     return (
          <View style={style.Container}>
               <View style={{
                    padding: 20,
                    backgroundColor:'white',
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                         width: 0,
                         height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                    margin: 10
               }}>
                    <Image source={require('../assets/grocerylist.png')} style={{height: 250, width: 250}}></Image>
               </View>

               <View style={{alignItems: 'center'}}>
                    <Text>Nutella Spread Hazelnut | 350g</Text>
                    <Text>250 Pesos </Text>
               </View>

               <View>

               </View>
          </View>
     )
}

const style = StyleSheet.create({
     Container: {
          flex: 1,
          justifyContent:'center',
          alignItems: 'center',

        

          
     }
})