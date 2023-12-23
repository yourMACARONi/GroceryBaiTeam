import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/WelcomeButton";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.green1,
        borderRadius: 15,
      }}
    >
      <View>
        <Image
          source={require("../assets/GBtext.png")}
          style={{
            height: 250,
            width: 400,
          }}
        ></Image>

        <View style={{marginTop:50}}>
        <Image
          source={require("../assets/finaGB.png")}
          style={{ 
           
            height: 530, 
            width: 450,
          }}
        ></Image>
        </View>
      </View>
      
      <View style={{
        alignItems: 'center',
        
      }}>
       
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
        style={{
          marginVertical: -180,
          marginHorizontal: 50,
          width: 300,
          borderRadius: 20,
        }}
      />
    
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "center",
        }}
      ></View>
    </View>
  );
};

export default Welcome;
