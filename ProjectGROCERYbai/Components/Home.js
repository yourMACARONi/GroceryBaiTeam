import { View, Text, Image, Pressable } from "react-native";
import * as React from "react";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native";
import { SearchBar } from "@rneui/base";

// import { BlurView } from "@react-native-community/blur";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState();

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor:COLORS.white
      }}
      // colors={[COLORS.orange, COLORS.primary]}
    >
      <View
        style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 10 }}
      >
        {/* Burger menu */}
        <TouchableOpacity onPress={() => console.log("pressed")}>
          <Ionicons name="menu" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      {/* Home Text */}
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>Start Listing</Text>

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>TODAY!</Text>
      </View>

      {/* Search Bar */}

      <View style={{ padding: 10 }}>
        <SearchBar
          platform="android"
          onChangeText={(newVal) => setSearch(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Search product here..."
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          onCancel={() => console.log(onCancel())}
          value={search}
        />
      </View>

      {/* Category Selection */}

      <View
        style={{
          flexDirection: "row",
          height: 40,
        }}
      >
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 6,
              }}
            >
              Fruits
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Vegetables
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Meat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Poultry
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Fish
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Milk
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Cans
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Oil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Cheese
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Egg
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Sugar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
              }}
            >
              Rice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.green1,

                marginLeft: 20,
                marginRight: 20,
              }}
            >
              Beverages
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Product container/ Box */}
 
    <View style={{width:'100%', height:'auto', backgroundColor:'red', padding:5, flexDirection:'row',flexWrap:'wrap'}}>
     
      <View style={{width:'50%', height:'50%', padding:5, backgroundColor: COLORS.green1}}>
        <View style={{width:'100%', height:'100%', padding:5, backgroundColor:COLORS.primary}}>
              <View style={{width:'80%', height:'50%', borderRadius:100, marginHorizontal:19, backgroundColor:COLORS.orange}}>

              </View>
        </View>
      </View>
      
      </View>
     

      {/* The logout button temporary */}
      {/* <View style={{ flex: 1, alignContent: "center" }}>
        <Button
          title="Log Out"
          onPress={() => navigation.navigate("Login")}
          style={{
            marginTop: 10,
            width: "100",
          }}
        />
      </View> */}

      <View
        style={{
          backgroundColor: "white",
          padding: 2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {/* Bottom Icons navigations */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={35} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Ionicons name="list" size={35} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <Ionicons name="add" size={40} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart" size={35} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle" size={35} color={COLORS.black} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Home;
