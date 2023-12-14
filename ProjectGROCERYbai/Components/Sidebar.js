import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

import COLORS from "../Constants/colors";

import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";



export default function Sidebar() {
  return (

    
    <SafeAreaView style={styles.container}>

 
         
        {/* back navigation */}
        
      <View
        style={{
          justifyContent: "flex-start",
          padding: 30,
        }}
      >
        <View style={{ marginTop: 30,  }}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="chevron-back-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5  }}>Back</Text>
          </TouchableOpacity>
          
        </View>

        {/* sample profile  */}

        <View>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            marginTop: 40,
          }}
          source={require("../assets/charlie.jpg")}
          s
        ></Image>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Charlie S. Quipanes
        </Text>
        <Text style={{fontSize:15, color: 'white'}} >sarpiuq@gmail.com</Text>

        </View>


{/* Navigations */}
        <View style={{ marginTop: 120}}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="clipboard-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5 }}>Product List</Text>
          </TouchableOpacity>
         
        </View>

        <View style={{ marginTop: 30,  }}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="pricetag-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5  }}>Offers and Promo</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="lock-closed-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5  }}>Privacy and Policy</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{ marginTop: 30}}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="shield-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5  }}>Security</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{ marginTop: 200 }}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="exit-outline" size={35} color={COLORS.white} />
            <Text style={{ fontSize: 20, color: "white", padding:5  }}>Sign Out</Text>
          </TouchableOpacity>
          
        </View>
        

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43A047',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
