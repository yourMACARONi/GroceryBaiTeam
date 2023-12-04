import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Button from "../Buttons/Button";
import { Pressable } from "react-native";

const Register = ({navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
      <View >

<View style={{flexDirection: 'row'}} >

  <TouchableOpacity 
  onPress={() => navigation.navigate("Welcome")}
  style={{marginTop: 20,}} >
<Ionicons name="arrow-undo" size={24} color={COLORS.black}/>

</TouchableOpacity>
   
   
  
  <Text
    style={{
      fontSize: 48,
      fontWeight: "bold",
      marginVertical: 12,
      marginHorizontal: 110,
      color: COLORS.black,
    }}
  >
    Sign Up
  </Text>
</View>

</View>
<View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:120}} >
          <Image source={require("../assets/gorcerybai.png")} 
          style={{height:200, width:220,}}></Image>
        </View>
        <View
          style={{
            marginTop: 60
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                
              }}
            >
              Recovery email
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View
          style={{
            marginBottom: 1
          }}
        >
          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                
              }}
            >
              Username
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>
          </View>

          

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                }}
              />
              <TouchableOpacity
                onPress={() => setPasswordShown(!passwordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {passwordShown == false ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                
              }}
            >
              Re-Enter Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Re-Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!passwordShown}
                style={{
                  width: "100%",
                }}
              />
              <TouchableOpacity
                onPress={() => setPasswordShown(!passwordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {passwordShown == false ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
             
            }}
          >
            <Checkbox
              style={{ marginRight: 8, marginTop:11 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.green : undefined}
            />
            <Text style={{marginTop:11, fontSize:16}} >I agree to the terms and conditions</Text>
          </View>

          <Button
            title="Sign Up"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 20,
              marginTop: 10
            }}
          >
           
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Or Sign up with
            </Text>
            

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />

                <Text>Facebook</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />

                <Text>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/discord.png")}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />

                <Text>Discord</Text>
              </TouchableOpacity> */}
            </View>

            <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>

          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Register;
