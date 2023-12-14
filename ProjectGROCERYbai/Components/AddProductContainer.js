import {
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import { Button, Text } from "react-native-paper";

export default function AddProductContainer(props) {
  const { title, label, buttonTitle } = props;
  return (
    <KeyboardAvoidingView style={style.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/charlie.jpg")}
            style={{ width: 400, height: 400, borderRadius: 50, marginTop:50 }}
          />
          <View>
            <TextInput
              mode="outlined"
             
              placeholder="Category of the Product"
              style={{
                backgroundColor: "white",
                width: 300,
                borderRadius: 100,
                margin: 10,
                textAlign: "center",
                alignItems: "center",
                padding: 10,
              }}
            ></TextInput>
          </View>
          <View>
            <TextInput
              mode="outlined"
              activeOutlineColor="green"
              placeholder="Product Name"
              style={{
                backgroundColor: "white",
                width: 300,
                borderRadius: 100,
                margin: 10,
                textAlign: "center",
                alignItems: "center",
                padding: 10,
              }}
            ></TextInput>
          </View>
          <View>
            <TextInput
              mode="outlined"
              activeOutlineColor="green"
              placeholder="Price"
              style={{
                backgroundColor: "white",
                width: 300,
                borderRadius: 100,
                margin: 10,
                textAlign: "center",
                alignItems: "center",
                padding: 10,
              }}
            ></TextInput>
          </View>
          
        </View>
        <View style={{ alignItems: "center" }}>
          <Text variant="titleMedium">{title}</Text>
          <Text variant="labelLarge">{label}</Text>
        </View>

        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Button
            mode="contained-tonal"
            buttonColor="#18B127"
            textColor="white"
            onPress={props.onPress}
            style={{ width: 314, height: 70, justifyContent: "center" }}
          >
            {"Upload"}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
