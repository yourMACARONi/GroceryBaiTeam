import { Button, TextInput, Text, HelperText} from 'react-native-paper'
import { View, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, Alert } from 'react-native'
import { Form, Formik } from 'formik'
import { registerSchema } from '../utils/schema'

import { Login } from '../api/account/login'

import * as SecureStore from 'expo-secure-store';





export default function Register( { navigation }) {
     return (
      <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{margin: 40}}>
           <Text variant='titleLarge' style={style.boldText}>Sign Up</Text>
      </View>

      <View>
           <Image source={require('../assets/gorcerybai.png')} style={{height: 220, width: 250}}></Image>
      </View>
      <View style={style.inputContainer}>
           <Formik
           onSubmit={ async (values)=> {
                const userSignUp =  await Login(JSON.stringify(values))

                if (userSignUp.error) return Alert.alert("Form is Empty", userSignUp.message)

                const token = await SecureStore.setItemAsync('token', userSignUp.token)

                navigation.replace('Planner')
           }}
           validationSchema={registerSchema}
           initialValues={{email: '',fullName: '', password: '',}}>
                {
                     ({ handleChange, values, handleBlur, handleSubmit, errors, touched }) => (
                          <View style={{alignItems: 'center'}}>
                               <View>
                                    <TextInput
                                         mode='outlined'
                                         activeOutlineColor='green'
                                         placeholder='Enter Your Email'
                                         onChangeText={handleChange('email')}
                                         value={values.email}
                                         error={errors.email && touched.password}
                                         onBlur={handleBlur('email')}
                                         style={style.Input}>
                                    </TextInput>
                                    <HelperText type='error'>{errors.email}</HelperText>
                               </View>
                               <View>
                                    <TextInput
                                         mode='outlined'
                                         activeOutlineColor='green'
                                         placeholder='Enter Full Name'
                                         onChangeText={handleChange('fullName')}
                                         value={values.fullName}
                                         error={errors.email && errors.fullName && touched.password}
                                         onBlur={handleBlur('fullName')}
                                         style={style.Input}>
                                    </TextInput>
                                    <HelperText type='error'>{errors.fullName}</HelperText>
                               </View>
                               <View>
                                    <TextInput
                                         mode='outlined'
                                         activeOutlineColor='green'
                                         placeholder='Enter Your Password'
                                         secureTextEntry={true}
                                         onChangeText={handleChange('password')}
                                         value={values.password}
                                         error={errors.email && errors.fullName && touched.password}
                                         onBlur={handleBlur('password')}
                                         style={style.Input}>
                                    </TextInput>
                                    <HelperText type='error'>{errors.password}</HelperText>
                               </View>
                               
                                    <Button   
                                         mode='elevated'
                                         onPress={handleSubmit}
                                         icon={'login'}
                                         textColor='black'
                                         buttonColor='white'
                                         style={{
                                              width:250,
                                              margin: 5
                                         }}>Register
                                    </Button>
                          </View>
                     )
                }
           </Formik>

           

           <View style={{flexDirection:'row', margin: 5, justifyContent: 'space-between'}}>
                <Text>Already have an account?</Text>
                <TouchableOpacity style={{marginLeft: 10}} onPress={ () => navigation.navigate('Login')}>
                     <Text style={{color: 'green'}}>Login Here</Text>
                </TouchableOpacity>
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
   
},
inputContainer: {
    textAlign: 'center',
    alignItems: 'center',

   
}

})