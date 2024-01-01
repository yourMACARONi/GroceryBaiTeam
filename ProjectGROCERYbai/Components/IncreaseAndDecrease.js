import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import COLORS from "../Constants/colors";

class IncreaseAndDecrease extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCount = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter === 0) {
      this.setState({ counter: 0 });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 18,
          
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.green1,
          }}
          onPress={() => this.decreaseCount()}
        >
          <Text style={{fontWeight:'bold'}}>-</Text>
        </TouchableOpacity>

        <Text>{this.state.counter}</Text>

        <TouchableOpacity
          style={{
            width: 100,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.green1,
          }}
          onPress={() => this.increaseCount()}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default IncreaseAndDecrease;
