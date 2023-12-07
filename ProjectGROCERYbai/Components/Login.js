import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../Buttons/loginButton";
import { Pressable } from "react-native";

import { TextInput } from "react-native-paper";

const Login = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 50 }}>

        <View >

            <View style={{flexDirection: 'row'}} >


              <TouchableOpacity 
                  onPress={() => navigation.navigate("Welcome")}
                  style={{marginTop: 20,}} >
                  <Ionicons name="arrow-undo" size={24} color={COLORS.black}/>
              </TouchableOpacity>
                
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "bold",
                  marginVertical: 12,
                  marginHorizontal: 70,
                  color: COLORS.black,
                }}
              >
                Sign In
              </Text>
            </View>

        </View>
        
        {/** Image View  */}
        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:140}} >
                  <Image source={require("../assets/gorcerybai.png")} 
                  style={{height:300, width:320,}}></Image>
        </View>
        
          <View style={{marginTop: 50}}>
            <View style={{ marginBottom: 10}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                  }}
                  activeOutlineColor="green"
                  mode={'outlined'}
                  placeholder="Enter your username"

                />
            </View>
          </View>

            <View style={{ marginBottom: 10 }}>
                <TextInput
                  mode={'outlined'}
                  activeOutlineColor="green"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  style={{
                    width: "100%",
                    backgroundColor: 'white'
                  }}
                  />
            </View>
    
            <View style={{
                      flexDirection: "row",
                      marginVertical: 10
                  }}>
                      
                      <TouchableOpacity
                          onPress={() => navigation.navigate("Recovery")}
                      >
                          <Text style={{
                              fontSize: 16,
                              color: COLORS.green1,
                              fontWeight: "bold",
                              marginLeft: 6,
                          }}>FORGOT PASSWORD?</Text>
                      </TouchableOpacity>
              </View>

                <View>
                  <Text></Text>
                </View>
      

                <Button title="Sign In" onPress={() => navigation.navigate("Home")}style={{marginTop: "auto",marginHorizontal: 75,borderRadius: 30,}}/>
      

            <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.green1,
                            fontWeight: "bold",
                            marginLeft: 6,
                            marginBottom:110
                        }}>Register Here</Text>
                    </Pressable>
                </View>
                
                

          </View>

         
        {/* </View> */}
    
    </SafeAreaView>
  );
};

export default Login;
