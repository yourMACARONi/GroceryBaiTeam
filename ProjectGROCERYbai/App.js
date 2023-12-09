import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  Login, Recovery, Register, Welcome, Home, List, AddProduct, Cart, Profile
} from "./Components";
import { SafeAreaView } from 'react-native-safe-area-context';
import Add from './Components/AddProduct';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login1 from './Components/Login1';
import Product from './Components/ProductInfo';
import Home1 from './Components/Home1';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <PaperProvider>
    <SafeAreaProvider style={styles.container}>
            <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName = "Welcome"
          >
            <Stack.Screen 
              name = "Welcome"
              component ={Home1}
              options = {{
                headerShown: false
              }}
              />

            <Stack.Screen 
              name = "Login"
              component ={Login}
              options = {{
                headerShown: false
              }}
              />

            <Stack.Screen 
              name = "Register"
              component ={Register}
              options = {{
                headerShown: false
              }}
              />

              <Stack.Screen
              name = "Recovery"
              component={Recovery}
              options={{
                headerShown: false
              }}
              />

              <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false
              }}
              />

              <Stack.Screen
              name="List"
              component={List}
              options={{
                headerShown: false
              }}
              />  

    <Stack.Screen
              name="AddProduct"
              component={Add}
              options={{
                headerShown: false
              }}
              />  

    <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false
              }}
              />  

    <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false
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
