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
            height: 250,
            width: 480,
          }}
        ></Image>
        <Image
          source={require("../assets/finaGB.png")}
          style={{ height: 650, width: 520 }}
        ></Image>
      </View>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
        style={{
          marginTop: "auto",
          marginHorizontal: 100,
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
