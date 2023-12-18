import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../Buttons/loginButton";
import { Recovery } from ".";

const Recover = ({navigation}) => {
    const [passwordShown, setPasswordShown] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View >

        <View style={{flexDirection: 'row'}} >

          <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={{marginTop: 20,}} >
        <Ionicons name="arrow-undo" size={24} color={COLORS.black}/>

        </TouchableOpacity>
           
           
          
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              marginVertical: 12,
              marginHorizontal: 65,
              color: COLORS.black,
            }}
          >
            Account Recovery
          </Text>
          
        </View>

        </View>
        <Text style={{fontSize:15}} >
            To recover your account, please enter your email address.
          </Text>
        <View
          style={{
            marginBottom: 1,
          }}
        >
          <View style={{ marginBottom: 13 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Recovery Email
            </Text>

            <View
              style={{
              
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          </View>

          <Button
            title="SUBMIT"
            onPress={() => Alert.alert("PUTANGINA MO APAKA BUBU MO CHECK YOUR MAIL", "KINALIMUTAN ANG PASSWORD AMPOTA HAHAHHAH")}
            style={{
          
              
              marginHorizontal: 35,
              width: 280,
              padding: 60,
              borderRadius: 30,
            }}
          />

          

            
          
        </View>
        
    </SafeAreaView>
  );
};

export default Recover;
