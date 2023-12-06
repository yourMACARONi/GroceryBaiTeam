import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

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
            height: 300,
            width: 400,
          }}
        ></Image>
        <Image
          source={require("../assets/finaGB.png")}
          style={{ 
            height: 600, 
            width: 450,
          }}
        ></Image>
      </View>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
        style={{
          marginTop: "auto",
          marginHorizontal: 50,
          width: 280,
          padding: 60,
          borderRadius: 30,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "center",
        }}
      ></View>
    </View>
  );
};

export default Welcome;
