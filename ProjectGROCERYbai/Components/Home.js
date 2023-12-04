import { View, Text, Image, Pressable } from "react-native";
import * as React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
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
      <View style={{flexDirection:'row', marginHorizontal:10, marginTop:10}} >
        <View style={{
          backgroundColor: "white",
          padding: 8,
          borderWidth:1,
          borderRadius:30
    }} >
      <TouchableOpacity>
      <Ionicons name="person" size={25} color={COLORS.black}/>
      </TouchableOpacity>
      </View>
      <Text style={{fontSize:24, marginHorizontal:10, marginTop:5}} >
        Hello,
      </Text>
      <Text style={{fontSize:24, fontWeight:'bold', marginTop:5}} >@user</Text>
      </View>
      
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
        
          <Image source={require("../assets/gorcerybai.png")}
          style={{height:500, width:420,}}
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
              marginTop: 10,
              width: "100",
            }}
          />

          
        </View>
      
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

export default Home;
