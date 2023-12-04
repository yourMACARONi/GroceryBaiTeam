import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:COLORS.green1
      }}
      // colors={COLORS.green1}
    >
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
        <Image source={require("../assets/LogoIntrogrocerybai.png")}style ={{height: 400, width: 420, marginTop: 30}}/>
        </View>
        {/* content */}
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 390,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                textAlign: "justify",
                top: 10,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 70,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an Account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.blue,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login Here!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
