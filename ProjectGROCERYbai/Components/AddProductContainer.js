import { TouchableOpacity } from "react-native";
import {
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";

import { Button, Text } from "react-native-paper";

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";

export default function AddProductContainer(props) {
  const [image, setImage] = useState(null);
  const addImage = () => {};
  const { title, label, buttonTitle } = props;
  return (
    <KeyboardAvoidingView style={style.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              elevation: 2,
              height: 200,
              width: 200,
              backgroundColor: "#efefef",
              position: "relative",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <View
              style={{
                opacity: 0.7,
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: "lightgrey",
                width: "100%",
                height: "25%",
              }}
            >
              <TouchableOpacity
                onPress={addImage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{image ? "Edit" : "Upload"} Image</Text>
                <AntDesign name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
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
            // onPress={props.onPress}
            onPress={() => Alert.alert("ASds")}
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
