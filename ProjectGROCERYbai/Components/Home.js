import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";
// import { BlurView } from "@react-native-community/blur";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:COLORS.green1

      }}
      // colors={[COLORS.orange, COLORS.primary]}
    >
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
        
          <Image source={require("../assets/gorcerybai.png")}
          style={{height:500, width:520, marginTop:200, }}
          />
          {/* <BlurView
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      /> */}
         
        </View>
        {/* content */}
       

          <Button
            title="Log Out"
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 270,
              width: "100",
            }}
          />

          
        </View>
      
    </View>
  );
};

export default Home;
