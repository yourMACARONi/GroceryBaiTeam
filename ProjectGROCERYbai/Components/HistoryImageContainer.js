import { View, KeyboardAvoidingView, Image, StyleSheet, Alert,} from 'react-native'
import { Button, Text } from 'react-native-paper'


export default function HistoryImageContainer(props) {

     const { title, label, buttonTitle} = props
     return (
          
          <KeyboardAvoidingView style={style.container}>
               <View>
                    <View style={{alignItems: 'center'}}>
                         <Image source={require('../assets/history.png')} style={{width: 400, height: 400}} />
                         <Text style={{fontSize:30, fontWeight:'bold'}}>No History</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                         <Text variant='titleMedium'>{title}</Text>
                         <Text variant='labelLarge'>{label}</Text>
                    </View>

                    {/* <View style={{marginTop: 250, alignItems: 'center'}}>
                         <Button mode='contained-tonal' buttonColor='#18B127' textColor='white'
                         onPress={props.onPress} style={{width: 314, height:70, justifyContent: 'center'}}>{buttonTitle}</Button>
                    </View> */}
               </View>
          </KeyboardAvoidingView>
     )
}

const style = StyleSheet.create({
     container: {
          backgroundColor: "#F5F5F8",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },})