import { View, Text, Image, Pressable } from "react-native";
import * as React from "react";
import COLORS from "../Constants/colors";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


// import { BlurView } from "@react-native-community/blur";


const Footer = ({ navigation }) => {
  return (
 
     
        <View style={{ backgroundColor: "white", width:"100%",
    padding: 2, flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity
   onPress={() => navigation.navigate("Home")}
      >
      <Ionicons name="home-outline" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("MyFavorite")}
      >
      <Ionicons name="heart-outline" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Cart")}
      >
      <Ionicons name="time-outline" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>navigation.navigate("Profile")}
      >
      <Ionicons name="person-outline" size={35} color={COLORS.black}/>
      </TouchableOpacity>
           
           
           
           
           
      </View>


    
  );
};

export default Footer;
