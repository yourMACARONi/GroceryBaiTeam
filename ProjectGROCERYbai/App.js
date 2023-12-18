import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Recovery,
  Register,
  Welcome,
  Home,
  List,
  AddProduct,
  Cart,
  Profile,
  MyFavorite,
  Sidebar,
  Footer,
  ProductInfo
} from "./Components";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "./Components/AddProduct";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";



import Product from "./Components/Container/Product";
import Search from "./Components/Container/Search";
import Planner from "./Components/Container/WeeklyPlanner/Planner";

import Empty from "./Components/Empty";
import AddProductContainer from "./Components/AddProductContainer";
import WeekContainer from "./Components/WeekContainer";
import ListContainer from "./Components/ListContainer";

import Register1 from "./Components/Register1";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Register1}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Recovery"
              component={Recovery}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="MyFavorite"
              component={MyFavorite}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="AddProduct"
              component={Product}
              options={{
                headerShown: true,
                title: "",
              }}
            />

            <Stack.Screen
              name="Footer"
              component={Footer}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
          
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
