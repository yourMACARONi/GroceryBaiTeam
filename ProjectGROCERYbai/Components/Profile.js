import { View, Text, Image, Pressable } from "react-native";
import * as React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
// import { BlurView } from "@react-native-community/blur";

const Profile = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:COLORS.white

      }}
      // colors={[COLORS.orange, COLORS.primary]}
    >
     
      
        <View style={{backgroundColor: "white",
    padding: 2, flexDirection:'row', justifyContent:'space-around', borderWidth:1}}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Home")}
      >
      <Ionicons name="home" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>navigation.navigate("List")}
      >
      <Ionicons name="list" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>navigation.navigate("AddProduct")}
      >
      <Ionicons name="add" size={40} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Cart")}
      >
      <Ionicons name="cart" size={35} color={COLORS.black}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>navigation.navigate("Profile")}
      >
      <Ionicons name="person-circle" size={35} color={COLORS.black}/>
      </TouchableOpacity>
           
           
           
           
           
      </View>

    </View>

    
  );
};

export default Profile;
